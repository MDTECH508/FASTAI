const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const schedule = require('node-schedule');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

let messages = [];
let scheduledMessages = [];

app.get('/api/health', (req, res) => {
  res.json({ status: 'API running' });
});

app.post('/api/messages/send', async (req, res) => {
  try {
    const { phoneNumber, message, mediaUrl } = req.body;
    if (!phoneNumber || !message) {
      return res.status(400).json({ error: 'Phone and message required' });
    }

    const msg = {
      id: Date.now(),
      phoneNumber,
      message,
      mediaUrl: mediaUrl || null,
      status: 'sent',
      timestamp: new Date()
    };

    messages.push(msg);
    res.json({ success: true, data: msg });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/messages/schedule', (req, res) => {
  try {
    const { phoneNumber, message, scheduleTime, intervalMinutes, maxTimes } = req.body;
    if (!phoneNumber || !message || !scheduleTime) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const scheduled = {
      id: Date.now(),
      phoneNumber,
      message,
      scheduleTime: new Date(scheduleTime),
      intervalMinutes: intervalMinutes || 60,
      maxTimes: maxTimes || 1,
      timesSent: 0,
      status: 'scheduled',
      createdAt: new Date()
    };

    scheduledMessages.push(scheduled);
    res.json({ success: true, data: scheduled });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/messages', (req, res) => {
  res.json({ messages, scheduledMessages });
});

app.delete('/api/messages/scheduled/:id', (req, res) => {
  scheduledMessages = scheduledMessages.filter(m => m.id !== parseInt(req.params.id));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
