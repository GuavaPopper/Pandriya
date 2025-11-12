// Pandriya Backend Server - Node.js + Express + Gemini AI
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files (HTML, CSS, JS)

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Mock data for dashboard
const DASHBOARD_DATA = {
    farmer: {
        name: "Pak Budi",
        farmSize: 2,
        location: "Desa Rasau Jaya Tiga"
    },
    traps: {
        total: 5,
        active: 5,
        status: "AKTIF"
    },
    fliesDetected: {
        last24h: 127,
        weeklyData: [65, 59, 80, 81, 56, 55, 127],
        weeklyLabels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
    },
    bait: {
        level: 80,
        daysUntilRefill: 3,
        type: "Daun Melada (Piper Colubrinum Link)"
    },
    alerts: [
        {
            trapId: 3,
            location: "Area Utara",
            message: "Peningkatan aktivitas 30% pasca hujan",
            severity: "medium"
        }
    ]
};

// Helper function to create context
function createContext() {
    return `
Data Dashboard Kebun ${DASHBOARD_DATA.farmer.name}:
- Luas kebun: ${DASHBOARD_DATA.farmSize} hektar
- Lokasi: ${DASHBOARD_DATA.farmer.location}
- Status perangkap: ${DASHBOARD_DATA.traps.active} dari ${DASHBOARD_DATA.traps.total} unit online
- Lalat buah terdeteksi (24 jam): ${DASHBOARD_DATA.fliesDetected.last24h} ekor
- Data 7 hari terakhir: ${DASHBOARD_DATA.fliesDetected.weeklyData.join(', ')} ekor
- Status umpan ${DASHBOARD_DATA.bait.type}: ${DASHBOARD_DATA.bait.level}%
- Estimasi penggantian umpan: ${DASHBOARD_DATA.bait.daysUntilRefill} hari lagi
- Alert: ${DASHBOARD_DATA.alerts.map(a => `Perangkap #${a.trapId} (${a.location}) - ${a.message}`).join('; ')}
`;
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Pandriya Backend is running!',
        geminiConfigured: !!process.env.GEMINI_API_KEY
    });
});

// Get dashboard data
app.get('/api/dashboard', (req, res) => {
    res.json(DASHBOARD_DATA);
});

// Generate AI Report
app.post('/api/ai/report', async (req, res) => {
    try {
        console.log('📊 Generating AI Report...');
        
        const contextData = createContext();
        const prompt = `Kamu adalah AI asisten untuk sistem monitoring hama lalat buah di perkebunan jambu kristal. 

Berdasarkan data berikut, buatlah laporan singkat dengan aturan KETAT:
1. MAKSIMAL 3 KALIMAT SAJA (total maksimal 80 kata)
2. JANGAN gunakan format markdown seperti ** atau __
3. Pisahkan setiap kalimat dengan <br><br>
4. JANGAN membuat list atau numbering
5. Fokus pada: kondisi terkini, insight penting, dan 1 rekomendasi
6. Gunakan bahasa Indonesia yang sederhana

${contextData}

Contoh format yang BENAR:
Terdeteksi lonjakan lalat buah dari 70 menjadi 127 ekor di Area Utara setelah hujan.<br><br>Perangkap #3 menunjukkan peningkatan aktivitas 30% yang perlu perhatian khusus.<br><br>REKOMENDASI: Segera cek dan bersihkan perangkap di Area Utara dalam 24 jam.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log('✅ Report generated successfully');
        res.json({ 
            success: true, 
            report: text 
        });
        
    } catch (error) {
        console.error('❌ Error generating report:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message,
            fallback: 'Terdeteksi peningkatan aktivitas Lalat Buah 30% di Perangkap #3 (Area Utara) pasca hujan.<br><br>Jumlah hama melonjak drastis dari rata-rata 70 ekor menjadi 127 ekor dalam 24 jam terakhir.<br><br>REKOMENDASI: Segera lakukan pengecekan dan pembersihan perangkap di area Utara, serta pertimbangkan penambahan umpan tambahan.'
        });
    }
});

// Chatbot endpoint
app.post('/api/ai/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ 
                success: false, 
                error: 'Message is required' 
            });
        }
        
        console.log('💬 Chatbot received message:', message);
        
        const contextData = createContext();
        const prompt = `Kamu adalah chatbot AI bernama "Pandriya" yang membantu petani jambu kristal memantau hama lalat buah. 

Aturan jawaban KETAT:
1. MAKSIMAL 2-3 KALIMAT (total maksimal 50 kata)
2. JANGAN gunakan format markdown seperti ** atau __
3. JANGAN membuat list atau numbering
4. Jawab langsung to the point dengan ramah
5. Gunakan emoji yang sesuai (maksimal 2 emoji)
6. Untuk penekanan gunakan huruf kapital, bukan bold

${contextData}

Pertanyaan petani: ${message}

Jawab singkat dan langsung menjawab pertanyaan.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log('✅ Chatbot response generated');
        res.json({ 
            success: true, 
            response: text 
        });
        
    } catch (error) {
        console.error('❌ Error in chatbot:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message,
            fallback: 'Maaf, terjadi kesalahan. Silakan coba lagi.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log('');
    console.log('🌿 ========================================');
    console.log('   PANDRIYA BACKEND SERVER');
    console.log('🌿 ========================================');
    console.log(`✅ Server running on: http://localhost:${PORT}`);
    console.log(`✅ Dashboard: http://localhost:${PORT}/Index.html`);
    console.log(`✅ API Health: http://localhost:${PORT}/api/health`);
    console.log(`✅ Gemini API Key: ${process.env.GEMINI_API_KEY ? '✓ Configured' : '✗ Missing'}`);
    console.log('🌿 ========================================');
    console.log('');
});
