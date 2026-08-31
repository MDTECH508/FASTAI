// api/sync-config.js - API pou synkronize config
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method === 'GET') {
        return res.status(200).json({
            success: true,
            config: {
                version: '1.0.0',
                server: 'fastai-sigma.vercel.app',
                scripts: {
                    holo_armas: { file: 'bde.js', container: '678kksijaj', dest: 'com.exo.drmo' },
                    holo_all: { file: 'bde.js', container: '678kksijaj', dest: 'com.exo.drmo' },
                    holo_ios: { file: '', dest: 'com.demo.aa' },
                    bypass: { file: 'bypass.lua' },
                    bypass_th: { file: 'bypass_th.lua' }
                },
                messages: {
                    error_no_key: 'PLEASE BUY KEY OR RECHECK',
                    active: 'ACTIVE',
                    inactive: 'INACTIVE'
                }
            },
            timestamp: Date.now()
        });
    }
          }
