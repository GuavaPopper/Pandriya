# 🤖 Dokumentasi Integrasi Google Gemini AI

## Overview

Dashboard Pandriya mengintegrasikan Google Gemini AI untuk memberikan dua fitur utama:
1. **Laporan AI**: Analisis otomatis data sensor
2. **Chatbot AI**: Asisten virtual interaktif

## Arsitektur

```
┌─────────────────┐
│  Dashboard UI   │
│   (Index.html)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐      ┌──────────────────┐
│   script.js     │─────▶│  Gemini API      │
│  - initAIReport │      │  (Google Cloud)  │
│  - initChatbot  │◀─────│                  │
└─────────────────┘      └──────────────────┘
         │
         ▼
┌─────────────────┐
│  DASHBOARD_DATA │
│  (Mock/Sensor)  │
└─────────────────┘
```

## Data Flow

### 1. Laporan AI
```
1. User membuka dashboard
2. initAIReport() dipanggil otomatis
3. Data DASHBOARD_DATA dijadikan konteks
4. Request ke Gemini API dengan prompt khusus
5. AI menganalisis data dan membuat laporan
6. Laporan ditampilkan di dashboard
```

### 2. Chatbot AI
```
1. User mengetik pertanyaan
2. Pertanyaan + konteks dashboard dikirim
3. Gemini AI memproses dengan pemahaman konteks
4. Respons AI ditampilkan dalam chat
5. Riwayat chat tersimpan di DOM
```

## Implementasi Detail

### Fungsi Utama: getGeminiResponse()

```javascript
async function getGeminiResponse(userMessage, mode = 'chatbot') {
    // 1. Siapkan konteks dari data dashboard
    const contextData = `...data lengkap...`;
    
    // 2. Buat prompt sesuai mode
    let prompt = mode === 'report' 
        ? 'Buat laporan analisis...' 
        : 'Jawab pertanyaan...';
    
    // 3. Kirim request ke API
    const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    });
    
    // 4. Parse dan return hasil
    return data.candidates[0].content.parts[0].text;
}
```

### Konteks Data yang Dikirim ke AI

AI mendapat informasi lengkap tentang:
- Nama petani dan luas kebun
- Status perangkap (aktif/total)
- Jumlah lalat buah terdeteksi
- Data historis 7 hari terakhir
- Status umpan (persentase & hari tersisa)
- Alert aktif dari sistem

## Prompt Engineering

### Laporan AI
```
Kamu adalah AI asisten untuk sistem monitoring hama lalat buah...
Buat laporan analisis singkat (2-3 kalimat, max 100 kata)
Fokus pada insight penting dan rekomendasi actionable
```

**Kenapa efektif:**
- Batasan kata memastikan laporan ringkas
- Instruksi "actionable" menghasilkan rekomendasi konkret
- Bahasa Indonesia ramah petani

### Chatbot
```
Kamu adalah chatbot AI "Pandriya" yang membantu petani...
Jawab singkat (max 50 kata), gunakan emoji yang sesuai
Pertanyaan: {user_input}
```

**Kenapa efektif:**
- Personality yang jelas (ramah, membantu)
- Batasan kata mencegah respons terlalu panjang
- Emoji membuat lebih engaging

## Konfigurasi API

### API Endpoint
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
```

### Request Parameters
```javascript
{
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
        temperature: 0.7,    // Kreativitas sedang
        topK: 40,            // Diversity
        topP: 0.95,          // Nucleus sampling
        maxOutputTokens: 200 // Max panjang respons
    }
}
```

## Error Handling

```javascript
try {
    const response = await getGeminiResponse(message, 'chatbot');
    addMessage(response, 'bot');
} catch (error) {
    console.error('Error:', error);
    // Fallback ke respons default
    addMessage('Maaf, terjadi kesalahan...', 'bot');
}
```

## Optimisasi & Best Practices

### 1. Rate Limiting
- Implementasikan debounce untuk chatbot
- Batasi jumlah request per menit
- Cache respons umum

### 2. Performance
- Lazy load AI features (hanya saat dibutuhkan)
- Show loading indicator untuk UX
- Timeout untuk request yang lama

### 3. Security
- Jangan hardcode API key di production
- Gunakan environment variables
- Implementasikan backend proxy untuk API calls

### 4. User Experience
- Auto-scroll chat ke bawah
- Animasi loading yang smooth
- Error message yang informatif

## Testing

### Test Scenarios

1. **Laporan AI**
   - ✅ Generate laporan pertama kali
   - ✅ Refresh laporan
   - ✅ Handle error gracefully

2. **Chatbot**
   - ✅ Pertanyaan tentang status umpan
   - ✅ Pertanyaan tentang lalat buah
   - ✅ Pertanyaan umum tentang sistem
   - ✅ Handle input kosong
   - ✅ Handle API error

### Manual Testing
```javascript
// Test di browser console:
getGeminiResponse('Kapan harus ganti umpan?', 'chatbot')
    .then(res => console.log(res));
```

## Roadmap / Pengembangan Selanjutnya

1. **Backend Integration**
   - Pindahkan API calls ke backend
   - Implementasi proper authentication
   - Database untuk menyimpan chat history

2. **Advanced AI Features**
   - Prediksi serangan lalat buah
   - Rekomendasi personalized
   - Multi-language support

3. **Analytics**
   - Track pertanyaan populer
   - Analisis efektivitas rekomendasi AI
   - Feedback loop dari petani

## Troubleshooting

### API Key tidak bekerja
- Cek apakah key masih valid
- Verifikasi quota di Google Cloud Console
- Pastikan API enabled

### Respons terlalu lambat
- Cek koneksi internet
- Pertimbangkan caching
- Reduce maxOutputTokens

### Respons tidak relevan
- Improve prompt engineering
- Tambah lebih banyak konteks
- Adjust temperature parameter

## Resources

- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)

---

**Dibuat oleh Tim Pandriya untuk Innovillage 6th**
