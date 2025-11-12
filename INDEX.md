# 📚 Pandriya Documentation Index

Selamat datang di dokumentasi Pandriya Dashboard! File ini membantu Anda menavigasi semua dokumentasi yang tersedia.

## 🚀 Mulai Cepat

**Baru pertama kali?** Mulai dari sini:

1. **[ENV_SETUP.md](ENV_SETUP.md)** 🔐
   - **WAJIB DIBACA PERTAMA!**
   - Setup API key dengan aman
   - Copy env.example.js → env.js

2. **[QUICKSTART.md](QUICKSTART.md)** ⚡
   - Setup 3 langkah
   - Testing cepat
   - Troubleshooting basic

3. **[Index.html](Index.html)** 🌐
   - Buka file ini di browser
   - Dashboard utama

## 📖 Dokumentasi Lengkap

### Untuk Pengguna

| File | Deskripsi | Level |
|------|-----------|-------|
| **[ENV_SETUP.md](ENV_SETUP.md)** | 🔐 Setup kredensial dengan AMAN | Beginner |
| **[README.md](README.md)** | Overview project, setup, dan fitur | Beginner |
| **[USAGE_GUIDE.md](USAGE_GUIDE.md)** | Cara menggunakan AI features | Beginner |
| **[SCREENSHOTS.md](SCREENSHOTS.md)** | Visual guide & UI preview | All levels |

### Untuk Developer

| File | Deskripsi | Level |
|------|-----------|-------|
| **[AI_INTEGRATION.md](AI_INTEGRATION.md)** | Detail teknis integrasi AI | Advanced |
| **[CHANGELOG.md](CHANGELOG.md)** | History update & roadmap | All levels |
| **[config.js](config.js)** | File konfigurasi | Intermediate |

## 🧪 Testing & Development

| File | Fungsi | Cara Pakai |
|------|--------|------------|
| **[test-ai.html](test-ai.html)** | Visual testing console | Buka di browser |
| **[test-ai.js](test-ai.js)** | Testing script | Load di console |

## 📁 File Struktur

```
Pandriya/
│
├── 📄 Core Files
│   ├── Index.html              # Dashboard utama
│   ├── script.js               # JavaScript logic + AI
│   ├── styles.css              # Styling
│   └── config.js               # Configuration
│
├── 🔒 Security & Environment
│   ├── .env                    # Backend env (JANGAN COMMIT!)
│   ├── env.js                  # Browser env (JANGAN COMMIT!)
│   ├── env.example.js          # Template (aman di-commit)
│   └── .gitignore              # Git ignore rules
│
├── 🧪 Testing
│   ├── test-ai.html            # Testing console UI
│   └── test-ai.js              # Testing script
│
└── 📚 Documentation
    ├── ENV_SETUP.md            # 🔐 Environment setup guide
    ├── README.md               # Main documentation
    ├── QUICKSTART.md           # Quick start guide
    ├── USAGE_GUIDE.md          # User manual
    ├── AI_INTEGRATION.md       # Technical docs
    ├── CHANGELOG.md            # Version history
    ├── SCREENSHOTS.md          # Visual guide
    └── INDEX.md                # This file
```

## 🎯 Use Cases

### Scenario 1: First Time Setup
```
1. Read ENV_SETUP.md (WAJIB!)
2. Copy env.example.js → env.js
3. Edit env.js dengan API key Anda
4. Read QUICKSTART.md
5. Open Index.html
6. Try chatbot with sample questions
7. Read USAGE_GUIDE.md for details
```

### Scenario 2: Testing AI Features
```
1. Open test-ai.html
2. Test laporan AI
3. Test chatbot dengan berbagai pertanyaan
4. Monitor statistics
```

### Scenario 3: Customization
```
1. Read AI_INTEGRATION.md
2. Edit config.js untuk settings
3. Modify DASHBOARD_DATA di script.js
4. Test perubahan dengan test-ai.html
```

### Scenario 4: Troubleshooting
```
1. Check USAGE_GUIDE.md → Troubleshooting section
2. Open browser console (F12)
3. Run test-ai.js untuk diagnosa
4. Check AI_INTEGRATION.md untuk detail
```

## 🔑 Key Concepts

### 1. Dashboard Data
- **File:** `script.js`
- **Variable:** `DASHBOARD_DATA`
- **Fungsi:** Mock data untuk demo
- **Format:** Object dengan farmer, traps, flies, bait, alerts

### 2. AI Integration
- **API:** Google Gemini Pro
- **Key:** Stored in `.env` and `script.js`
- **Functions:** 
  - `getGeminiResponse()` - Main API call
  - `generateAIReport()` - Generate laporan
  - `initChatbot()` - Initialize chatbot

### 3. Configuration
- **File:** `config.js`
- **Sections:**
  - API settings
  - AI parameters
  - Prompts
  - Dashboard settings
  - UI/UX preferences

## 📊 Features Overview

### ✅ Implemented (Version 2.0)

| Feature | File | Status |
|---------|------|--------|
| Dashboard UI | Index.html | ✅ |
| Chart visualization | script.js | ✅ |
| AI Report | script.js | ✅ |
| Chatbot | script.js | ✅ |
| Testing tools | test-ai.* | ✅ |
| Documentation | *.md | ✅ |
| Dark mode | styles.css | ✅ |
| Mobile responsive | styles.css | ✅ |

### 🔜 Planned (Future)

| Feature | Priority | Version |
|---------|----------|---------|
| Chat history persistence | High | 2.1 |
| Voice input | Medium | 2.1 |
| Multi-language | Medium | 2.1 |
| Backend integration | High | 3.0 |
| Real sensor data | High | 3.0 |
| User auth | Medium | 3.0 |
| Predictive analytics | Low | 4.0 |

## 🛠️ Quick Commands

### Running Locally
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code
# Install Live Server extension → Right click Index.html
```

### Testing in Console
```javascript
// Load test script
// (copy-paste isi test-ai.js)

// Run tests
quickTest()
runAllTests()
testChatbot("Pertanyaan Anda")
```

### Checking Config
```javascript
// In browser console
console.log(PANDRIYA_CONFIG)
console.log(DASHBOARD_DATA)
```

## 🎓 Learning Path

### Level 1: Beginner
1. ✅ Read QUICKSTART.md
2. ✅ Open Index.html & explore
3. ✅ Try chatbot
4. ✅ Read USAGE_GUIDE.md

### Level 2: Intermediate
1. ✅ Read README.md completely
2. ✅ Use test-ai.html for testing
3. ✅ Edit config.js
4. ✅ Modify DASHBOARD_DATA

### Level 3: Advanced
1. ✅ Read AI_INTEGRATION.md
2. ✅ Understand prompt engineering
3. ✅ Customize AI behavior
4. ✅ Integrate with backend

## 🔗 External Resources

### Google Gemini AI
- [Official Docs](https://ai.google.dev/docs)
- [API Reference](https://ai.google.dev/api)
- [Pricing](https://ai.google.dev/pricing)

### Chart.js
- [Documentation](https://www.chartjs.org/docs/)
- [Samples](https://www.chartjs.org/samples/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

## 📞 Support

### Dokumentasi
- ✅ Semua file `.md` di folder ini
- ✅ Inline comments di code

### Testing
- ✅ test-ai.html untuk UI testing
- ✅ Browser console untuk debugging

### Community
- 🌿 Tim Pandriya - Innovillage 6th

## ⚠️ Important Notes

### Security
- ⚠️ NEVER commit `.env` to public repo
- ⚠️ Use environment variables in production
- ⚠️ Implement rate limiting

### API Usage
- 📊 Monitor quota di Google Cloud Console
- 💰 Check pricing untuk production use
- 🔄 Implement caching untuk efficiency

### Data
- 📝 Current data is mock/hardcoded
- 🔌 Ready untuk integrasi sensor real
- 💾 No database yet (roadmap v3.0)

## 🎉 Get Started Now!

**Ready to explore?** 

1. Open **[QUICKSTART.md](QUICKSTART.md)** for setup
2. Open **[Index.html](Index.html)** in browser
3. Start chatting with AI! 💬

---

**Version:** 2.0.0  
**Last Updated:** November 12, 2025  
**Team:** Pandriya - Innovillage 6th 🌿

**Made with 💚 for petani Desa Rasau Jaya Tiga**
