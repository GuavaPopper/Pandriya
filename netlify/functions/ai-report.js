// Netlify Function - AI Report Generator
const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.handler = async (event, context) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight request
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `Kamu adalah AI asisten untuk sistem monitoring hama lalat buah di perkebunan jambu kristal. 

Berdasarkan data berikut, buatlah laporan singkat dengan aturan KETAT:
1. MAKSIMAL 3 KALIMAT SAJA (total maksimal 80 kata)
2. JANGAN gunakan format markdown seperti ** atau __
3. Pisahkan setiap kalimat dengan <br><br>
4. JANGAN membuat list atau numbering
5. Fokus pada: kondisi terkini, insight penting, dan 1 rekomendasi
6. Gunakan bahasa Indonesia yang sederhana

Data Dashboard:
- Luas kebun: 2 hektar
- Lokasi: Desa Rasau Jaya Tiga
- Status perangkap: 5 dari 5 unit online
- Lalat buah terdeteksi (24 jam): 127 ekor
- Data 7 hari terakhir: 65, 59, 80, 81, 56, 55, 127 ekor
- Status umpan Daun Melada (Piper Colubrinum Link): 80%
- Estimasi penggantian umpan: 3 hari lagi
- Alert: Perangkap #3 (Area Utara) - Peningkatan aktivitas 30% pasca hujan

Contoh format yang BENAR:
Terdeteksi lonjakan lalat buah dari 70 menjadi 127 ekor di Area Utara setelah hujan.<br><br>Perangkap #3 menunjukkan peningkatan aktivitas 30% yang perlu perhatian khusus.<br><br>REKOMENDASI: Segera cek dan bersihkan perangkap di Area Utara dalam 24 jam.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
                success: true, 
                report: text 
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                success: false,
                error: error.message,
                fallback: 'Terdeteksi peningkatan aktivitas Lalat Buah 30% di Perangkap #3 (Area Utara) pasca hujan.<br><br>Jumlah hama melonjak drastis dari rata-rata 70 ekor menjadi 127 ekor dalam 24 jam terakhir.<br><br>REKOMENDASI: Segera lakukan pengecekan dan pembersihan perangkap di area Utara.'
            })
        };
    }
};
