// Netlify Function - AI Chatbot
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
        const { message } = JSON.parse(event.body);

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false,
                    error: 'Message is required' 
                })
            };
        }

        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `Kamu adalah chatbot AI bernama "Pandriya" yang membantu petani jambu kristal memantau hama lalat buah. 

Aturan jawaban KETAT:
1. MAKSIMAL 2-3 KALIMAT (total maksimal 50 kata)
2. JANGAN gunakan format markdown seperti ** atau __
3. JANGAN membuat list atau numbering
4. Jawab langsung to the point dengan ramah
5. Gunakan emoji yang sesuai (maksimal 2 emoji)
6. Untuk penekanan gunakan huruf kapital, bukan bold

Data Dashboard:
- Luas kebun: 2 hektar (Pak Budi)
- Lokasi: Desa Rasau Jaya Tiga
- Status perangkap: 5 dari 5 unit online
- Lalat buah terdeteksi (24 jam): 127 ekor
- Data 7 hari terakhir: 65, 59, 80, 81, 56, 55, 127 ekor
- Status umpan Daun Melada: 80%
- Estimasi penggantian umpan: 3 hari lagi
- Alert: Perangkap #3 (Area Utara) - Peningkatan aktivitas 30% pasca hujan

Pertanyaan petani: ${message}

Jawab singkat dan langsung menjawab pertanyaan.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
                success: true, 
                response: text 
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
                fallback: 'Maaf, terjadi kesalahan. Silakan coba lagi.'
            })
        };
    }
};
