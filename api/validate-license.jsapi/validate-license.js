// api/validate-license.js - API Validation pou fastai-sigma.vercel.app
export default async function handler(req, res) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // ==================== GET - Status Check ====================
    if (req.method === 'GET') {
        return res.status(200).json({
            status: 'online',
            server: 'fastai-sigma.vercel.app',
            version: '1.0.0',
            timestamp: Date.now(),
            message: 'BLAST PROXY API'
        });
    }
    
    // ==================== POST - Validate License ====================
    if (req.method === 'POST') {
        try {
            const { licenseKey, userIP, timestamp } = req.body;
            
            // Validate input
            if (!licenseKey || !userIP) {
                return res.status(400).json({
                    valid: false,
                    message: 'PLEASE BUY KEY OR RECHECK'
                });
            }
            
            // 50 Clés valides
            const VALID_LICENSES = [
                // 1 Jour (20 clés)
                { key: 'BLAST-1D-AAAA1-BBBB1-CCCC1', duration: 1 },
                { key: 'BLAST-1D-AAAA2-BBBB2-CCCC2', duration: 1 },
                { key: 'BLAST-1D-AAAA3-BBBB3-CCCC3', duration: 1 },
                { key: 'BLAST-1D-AAAA4-BBBB4-CCCC4', duration: 1 },
                { key: 'BLAST-1D-AAAA5-BBBB5-CCCC5', duration: 1 },
                { key: 'BLAST-1D-AAAA6-BBBB6-CCCC6', duration: 1 },
                { key: 'BLAST-1D-AAAA7-BBBB7-CCCC7', duration: 1 },
                { key: 'BLAST-1D-AAAA8-BBBB8-CCCC8', duration: 1 },
                { key: 'BLAST-1D-AAAA9-BBBB9-CCCC9', duration: 1 },
                { key: 'BLAST-1D-AAAA0-BBBB0-CCCC0', duration: 1 },
                { key: 'BLAST-1D-DDDD1-EEEE1-FFFF1', duration: 1 },
                { key: 'BLAST-1D-DDDD2-EEEE2-FFFF2', duration: 1 },
                { key: 'BLAST-1D-DDDD3-EEEE3-FFFF3', duration: 1 },
                { key: 'BLAST-1D-DDDD4-EEEE4-FFFF4', duration: 1 },
                { key: 'BLAST-1D-DDDD5-EEEE5-FFFF5', duration: 1 },
                { key: 'BLAST-1D-DDDD6-EEEE6-FFFF6', duration: 1 },
                { key: 'BLAST-1D-DDDD7-EEEE7-FFFF7', duration: 1 },
                { key: 'BLAST-1D-DDDD8-EEEE8-FFFF8', duration: 1 },
                { key: 'BLAST-1D-DDDD9-EEEE9-FFFF9', duration: 1 },
                { key: 'BLAST-1D-DDDD0-EEEE0-FFFF0', duration: 1 },
                
                // 7 Jours (20 clés)
                { key: 'BLAST-7D-GGGG1-HHHH1-IIII1', duration: 7 },
                { key: 'BLAST-7D-GGGG2-HHHH2-IIII2', duration: 7 },
                { key: 'BLAST-7D-GGGG3-HHHH3-IIII3', duration: 7 },
                { key: 'BLAST-7D-GGGG4-HHHH4-IIII4', duration: 7 },
                { key: 'BLAST-7D-GGGG5-HHHH5-IIII5', duration: 7 },
                { key: 'BLAST-7D-GGGG6-HHHH6-IIII6', duration: 7 },
                { key: 'BLAST-7D-GGGG7-HHHH7-IIII7', duration: 7 },
                { key: 'BLAST-7D-GGGG8-HHHH8-IIII8', duration: 7 },
                { key: 'BLAST-7D-GGGG9-HHHH9-IIII9', duration: 7 },
                { key: 'BLAST-7D-GGGG0-HHHH0-IIII0', duration: 7 },
                { key: 'BLAST-7D-JJJJ1-KKKK1-LLLL1', duration: 7 },
                { key: 'BLAST-7D-JJJJ2-KKKK2-LLLL2', duration: 7 },
                { key: 'BLAST-7D-JJJJ3-KKKK3-LLLL3', duration: 7 },
                { key: 'BLAST-7D-JJJJ4-KKKK4-LLLL4', duration: 7 },
                { key: 'BLAST-7D-JJJJ5-KKKK5-LLLL5', duration: 7 },
                { key: 'BLAST-7D-JJJJ6-KKKK6-LLLL6', duration: 7 },
                { key: 'BLAST-7D-JJJJ7-KKKK7-LLLL7', duration: 7 },
                { key: 'BLAST-7D-JJJJ8-KKKK8-LLLL8', duration: 7 },
                { key: 'BLAST-7D-JJJJ9-KKKK9-LLLL9', duration: 7 },
                { key: 'BLAST-7D-JJJJ0-KKKK0-LLLL0', duration: 7 },
                
                // 30 Jours (10 clés)
                { key: 'BLAST-30D-MMMM1-NNNN1-OOOO1', duration: 30 },
                { key: 'BLAST-30D-MMMM2-NNNN2-OOOO2', duration: 30 },
                { key: 'BLAST-30D-MMMM3-NNNN3-OOOO3', duration: 30 },
                { key: 'BLAST-30D-MMMM4-NNNN4-OOOO4', duration: 30 },
                { key: 'BLAST-30D-MMMM5-NNNN5-OOOO5', duration: 30 },
                { key: 'BLAST-30D-PPPP1-QQQQ1-RRRR1', duration: 30 },
                { key: 'BLAST-30D-PPPP2-QQQQ2-RRRR2', duration: 30 },
                { key: 'BLAST-30D-PPPP3-QQQQ3-RRRR3', duration: 30 },
                { key: 'BLAST-30D-PPPP4-QQQQ4-RRRR4', duration: 30 },
                { key: 'BLAST-30D-PPPP5-QQQQ5-RRRR5', duration: 30 }
            ];
            
            // Cherche la licence
            const license = VALID_LICENSES.find(l => l.key === licenseKey);
            
            // Si pas trouvée
            if (!license) {
                return res.status(401).json({
                    valid: false,
                    message: 'PLEASE BUY KEY OR RECHECK'
                });
            }
            
            // Calculer expiration
            const expiresAt = Date.now() + license.duration * 24 * 60 * 60 * 1000;
            
            // Retourner succès
            return res.status(200).json({
                valid: true,
                message: 'Licence valide',
                expiresAt: expiresAt,
                duration: license.duration,
                sessionId: 'SESSION-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                userIP: userIP
            });
            
        } catch (error) {
            return res.status(500).json({
                valid: false,
                message: 'PLEASE BUY KEY OR RECHECK'
            });
        }
    }
    
    // Méthode non supportée
    return res.status(405).json({
        valid: false,
        message: 'METHOD NOT ALLOWED'
    });
        }
