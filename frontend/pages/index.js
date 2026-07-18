import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSend, FiClock, FiTrash2 } from 'react-icons/fi';
import styles from '../styles/Home.module.css';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
});

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [scheduledMessages, setScheduledMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('send');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    phoneNumber: '',
    message: '',
  });

  const [scheduleData, setScheduleData] = useState({
    phoneNumber: '',
    message: '',
    scheduleTime: '',
    intervalMinutes: 60,
    maxTimes: 1,
  });

  const fetchMessages = async () => {
    try {
      const res = await api.get('/api/messages');
      setMessages(res.data.messages);
      setScheduledMessages(res.data.scheduledMessages);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!formData.phoneNumber || !formData.message) {
      alert('Rempli chanp yo!');
      return;
    }

    try {
      setLoading(true);
      await api.post('/api/messages/send', formData);
      alert('✓ Mesaj voye!');
      setFormData({ phoneNumber: '', message: '' });
      fetchMessages();
    } catch (error) {
      alert('Erè: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSchedule = async (e) => {
    e.preventDefault();
    if (!scheduleData.phoneNumber || !scheduleData.message || !scheduleData.scheduleTime) {
      alert('Rempli chanp yo!');
      return;
    }

    try {
      setLoading(true);
      await api.post('/api/messages/schedule', scheduleData);
      alert('✓ Mesaj schedule!');
      setScheduleData({
        phoneNumber: '',
        message: '',
        scheduleTime: '',
        intervalMinutes: 60,
        maxTimes: 1,
      });
      fetchMessages();
    } catch (error) {
      alert('Erè: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Ou sèten?')) {
      try {
        await api.delete(`/api/messages/scheduled/${id}`);
        fetchMessages();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.glow}></div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>💬 WhatsApp Messaging</h1>
          <p className={styles.subtitle}>Voye ak schedule mesaj</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab('send')}
            className={`${styles.tab} ${activeTab === 'send' ? styles.activeTab : ''}`}
          >
            <FiSend /> Voye Dirèk
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`${styles.tab} ${activeTab === 'schedule' ? styles.activeTab : ''}`}
          >
            <FiClock /> Schedule
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.formSection}>
            {activeTab === 'send' ? (
              <form onSubmit={handleSend} className={styles.form}>
                <h2>Voye Mesaj</h2>
                <input
                  type="tel"
                  placeholder="+1234567890"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <textarea
                  placeholder="Ekri mesaj ou..."
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Voye...' : 'Voye Mesaj'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSchedule} className={styles.form}>
                <h2>Schedule Mesaj</h2>
                <input
                  type="tel"
                  placeholder="+1234567890"
                  value={scheduleData.phoneNumber}
                  onChange={(e) => setScheduleData({ ...scheduleData, phoneNumber: e.target.value })}
                />
                <textarea
                  placeholder="Ekri mesaj ou..."
                  rows="3"
                  value={scheduleData.message}
                  onChange={(e) => setScheduleData({ ...scheduleData, message: e.target.value })}
                />
                <input
                  type="datetime-local"
                  value={scheduleData.scheduleTime}
                  onChange={(e) => setScheduleData({ ...scheduleData, scheduleTime: e.target.value })}
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Entèval (minit)"
                  value={scheduleData.intervalMinutes}
                  onChange={(e) => setScheduleData({ ...scheduleData, intervalMinutes: parseInt(e.target.value) })}
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Konbyen fwa"
                  value={scheduleData.maxTimes}
                  onChange={(e) => setScheduleData({ ...scheduleData, maxTimes: parseInt(e.target.value) })}
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Schedule...' : 'Schedule Mesaj'}
                </button>
              </form>
            )}
          </div>

          <div className={styles.messagesSection}>
            {activeTab === 'schedule' ? (
              <div className={styles.messagesList}>
                <h2>Mesaj Schedule</h2>
                {scheduledMessages.length === 0 ? (
                  <p>Pa gen mesaj schedule ankò</p>
                ) : (
                  scheduledMessages.map((msg) => (
                    <div key={msg.id} className={styles.scheduleCard}>
                      <div className={styles.messageInfo}>
                        <p className={styles.phone}>{msg.phoneNumber}</p>
                        <p className={styles.msgText}>{msg.message}</p>
                        <div className={styles.msgDetails}>
                          <span>⏰ {new Date(msg.scheduleTime).toLocaleString()}</span>
                          <span>🔄 {msg.intervalMinutes}min</span>
                          <span>📊 {msg.timesSent}/{msg.maxTimes}</span>
                          <span className={styles.status}>{msg.status}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className={styles.deleteBtn}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className={styles.messagesList}>
                <h2>Mesaj Voye</h2>
                {messages.length === 0 ? (
                  <p>Pa gen mesaj ankò</p>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} className={styles.messageCard}>
                      <p className={styles.phone}>{msg.phoneNumber}</p>
                      <p className={styles.msgText}>{msg.message}</p>
                      <div className={styles.msgFooter}>
                        <span>{new Date(msg.timestamp).toLocaleString()}</span>
                        <span className={styles.statusBadge}>{msg.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
