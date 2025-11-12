# 🚀 Panduan Penggunaan Fitur AI Pandriya

## Quick Start

### 1. Buka Dashboard
- Buka file `Index.html` di browser
- Scroll ke bagian "Dashboard Demo"
- Fitur AI akan otomatis aktif

### 2. Melihat Laporan AI
- Laporan AI akan **otomatis generate** saat halaman dibuka
- Klik tombol **"🔄 Refresh Laporan"** untuk mendapatkan analisis baru
- Laporan memberikan insight tentang kondisi kebun

### 3. Menggunakan Chatbot AI
- Ketik pertanyaan di kolom chat
- Tekan **Enter** atau klik tombol **"Kirim"**
- AI akan merespons dalam beberapa detik

## Contoh Pertanyaan untuk Chatbot

### ✅ Pertanyaan Umum
```
- Kapan saya harus ganti umpan?
- Berapa banyak lalat buah terdeteksi hari ini?
- Apakah perangkap masih berfungsi normal?
```

### ✅ Pertanyaan Spesifik
```
- Apa rekomendasi untuk area utara?
- Bagaimana tren lalat buah minggu ini?
- Kenapa ada peningkatan lalat buah?
```

### ✅ Pertanyaan Teknis
```
- Berapa lama umpan Daun Melada bisa bertahan?
- Apa yang harus saya lakukan sekarang?
- Perangkap mana yang perlu dicek?
```

## Testing AI Features

### Cara 1: Testing di Browser Console
1. Buka Developer Tools (F12)
2. Masuk ke tab Console
3. Load testing script:
   ```javascript
   // Copy paste isi file test-ai.js ke console
   ```
4. Jalankan test:
   ```javascript
   quickTest()          // Test cepat
   runAllTests()        // Test lengkap
   ```

### Cara 2: Menggunakan Test Console
1. Buka file `test-ai.html` di browser
2. Gunakan interface untuk testing:
   - **Test Laporan AI**: Klik "Generate Laporan"
   - **Test Chatbot**: Ketik pertanyaan atau "Random Question"
   - **Lihat Statistics**: Monitor success rate dan response time
   - **Cek Dashboard Data**: Verifikasi data yang digunakan

## Memahami Respons AI

### Laporan AI
Format respons:
```
[Analisis situasi] + [Insight/Temuan] + [Rekomendasi]
```

Contoh:
```
"Terdeteksi peningkatan aktivitas Lalat Buah 30% di Perangkap #3 
(Area Utara) pasca hujan. Rekomendasi: Lakukan pengecekan dan 
bersihkan perangkap."
```

### Chatbot AI
Format respons:
```
[Jawaban langsung] + [Info tambahan jika relevan] + [Emoji]
```

Contoh:
```
"Status umpan Anda di 80%. Estimasi penggantian 3 hari lagi. 
Sistem akan memberi notifikasi saat umpan mencapai 20%. 😊"
```

## Troubleshooting

### ❌ Laporan AI tidak muncul
**Solusi:**
1. Cek koneksi internet
2. Buka Developer Console (F12) untuk lihat error
3. Verifikasi API key di `.env` atau `script.js`
4. Refresh halaman (F5)

### ❌ Chatbot tidak merespons
**Solusi:**
1. Pastikan pertanyaan tidak kosong
2. Tunggu beberapa detik (API butuh waktu)
3. Cek loading indicator ("💭 AI sedang berpikir...")
4. Jika error, coba pertanyaan lain

### ❌ Respons AI tidak relevan
**Solusi:**
1. Buat pertanyaan lebih spesifik
2. Gunakan kata kunci: "umpan", "perangkap", "lalat buah"
3. Tanya satu hal dalam satu pertanyaan
4. Refresh laporan untuk context baru

### ❌ Loading terlalu lama (>10 detik)
**Solusi:**
1. Cek kecepatan internet
2. Mungkin ada rate limiting dari API
3. Tunggu 1-2 menit lalu coba lagi
4. Gunakan `test-ai.html` untuk diagnosa

## Tips & Best Practices

### ✨ Untuk Hasil Terbaik

1. **Pertanyaan Jelas**
   - ❌ "Gimana?"
   - ✅ "Bagaimana kondisi perangkap saat ini?"

2. **Gunakan Konteks**
   - ❌ "Berapa?"
   - ✅ "Berapa lalat buah yang terdeteksi hari ini?"

3. **Bahasa Indonesia**
   - AI dioptimasi untuk Bahasa Indonesia
   - Bisa pakai bahasa informal/formal

4. **Satu Pertanyaan Sekali**
   - ❌ "Berapa lalat buah dan kapan ganti umpan dan apakah perangkap ok?"
   - ✅ Tanya satu per satu untuk jawaban lebih detail

### 📊 Monitoring & Analytics

1. **Perhatikan Pattern**
   - Catat pertanyaan yang sering ditanya
   - Identifikasi insight yang berguna

2. **Validasi Rekomendasi**
   - Cross-check dengan kondisi lapangan
   - Kombinasikan dengan pengalaman petani

3. **Feedback**
   - Jika rekomendasi kurang tepat, beri feedback
   - Bantu improve AI dengan pertanyaan yang lebih baik

## Keamanan & Privacy

### ⚠️ Yang Perlu Diperhatikan

1. **API Key**
   - Jangan share API key ke orang lain
   - Jangan commit `.env` ke GitHub
   - Ganti API key jika terekspos

2. **Data Pribadi**
   - Jangan masukkan informasi sensitif di chat
   - Data chat tidak tersimpan di server (hanya lokal)

3. **Production Use**
   - Untuk production, gunakan backend proxy
   - Implementasi rate limiting
   - Add authentication

## FAQ

**Q: Berapa lama respons AI?**
A: Biasanya 2-5 detik, tergantung koneksi internet.

**Q: Apakah chatbot selalu online?**
A: Ya, selama ada koneksi internet dan API key valid.

**Q: Bisakah AI belajar dari percakapan?**
A: Saat ini tidak, setiap request independent. Untuk fitur learning, perlu backend.

**Q: Apakah data chat tersimpan?**
A: Hanya tersimpan di browser lokal (DOM), tidak ada database.

**Q: Bisakah menggunakan bahasa lain?**
A: AI dioptimasi untuk Bahasa Indonesia, tapi bisa memahami Inggris.

**Q: Batasan penggunaan API?**
A: Tergantung quota Google Cloud. Monitor di console.

## Next Steps

1. **Explore Features**
   - Coba berbagai pertanyaan
   - Lihat variasi respons AI
   - Test dengan data berbeda

2. **Customize**
   - Edit prompt di `script.js` untuk persona berbeda
   - Adjust data di `DASHBOARD_DATA`
   - Tambah pertanyaan umum

3. **Integrate**
   - Hubungkan dengan sensor IoT real
   - Tambah database untuk history
   - Deploy ke production

## Support

Untuk pertanyaan atau bantuan:
- Lihat dokumentasi: `AI_INTEGRATION.md`
- Cek file README: `README.md`
- Test features: `test-ai.html`

---

**Happy Farming! 🌿**
Tim Pandriya - Innovillage 6th
