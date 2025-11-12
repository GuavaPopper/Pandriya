// Pandriya Dashboard - Interactive Features

// Mock data untuk dashboard (hardcoded)
const DASHBOARD_DATA = {
    farmer: {
        name: "Pak Budi",
        farmSize: 2, // hektar
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
        level: 80, // persentase
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

// Gemini API Configuration
// MENGGUNAKAN NETLIFY FUNCTIONS!
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'     // Local development
    : '/.netlify/functions';           // Production (Netlify)

console.log('🌐 Environment:', window.location.hostname === 'localhost' ? 'Development' : 'Production');
console.log('🔗 API Base URL:', API_BASE_URL);

// Validasi koneksi backend (hanya di local)
if (window.location.hostname === 'localhost') {
    fetch(`${API_BASE_URL}/health`)
        .then(res => res.json())
        .then(data => {
            console.log('✅ Backend connection:', data);
        })
        .catch(err => {
            console.error('⚠️ Backend tidak terhubung! Pastikan server Node.js sudah running:', err);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initMobileMenu();
    initThemeToggle();
    initScrollAnimations();
    initSmoothScroll();
    initTabs();
    initChart();
    initHeaderScroll();
    initAIReport();
    initChatbot();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = menuBtn.querySelector('svg');
            if (icon) {
                icon.style.transform = mobileMenu.classList.contains('active') 
                    ? 'rotate(90deg)' 
                    : 'rotate(0deg)';
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('svg');
                if (icon) icon.style.transform = 'rotate(0deg)';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
}

// Dark Mode Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Update icon
            const isDark = body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
            
            // Save preference
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Add animation
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.card, .feature-item, .stat-card, .impact-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Tab System
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Chart.js Initialization
function initChart() {
    const ctx = document.getElementById('hamaChart');
    
    if (ctx && typeof Chart !== 'undefined') {
        new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
                datasets: [{
                    label: 'Lalat Buah Terdeteksi',
                    data: [65, 59, 80, 81, 56, 55, 127],
                    backgroundColor: 'rgba(56, 142, 60, 0.2)',
                    borderColor: 'rgba(56, 142, 60, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                    hoverBackgroundColor: 'rgba(56, 142, 60, 0.3)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        borderRadius: 8,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return ` ${context.raw} hama terdeteksi`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        title: {
                            display: true,
                            text: 'Jumlah Lalat Buah',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }
}

// Simulate real-time data updates (optional enhancement)
function updateDashboardData() {
    const statValue = document.querySelector('.stat-card:nth-child(2) .stat-value');
    if (statValue) {
        setInterval(() => {
            const currentValue = parseInt(statValue.textContent);
            const newValue = currentValue + Math.floor(Math.random() * 3);
            statValue.textContent = newValue;
            
            // Add pulse animation
            statValue.style.transform = 'scale(1.1)';
            setTimeout(() => {
                statValue.style.transform = 'scale(1)';
            }, 300);
        }, 10000); // Update every 10 seconds
    }
}

// Chatbot simulation (basic demo)
function initChatbot() {
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    const chatLoading = document.getElementById('chat-loading');
    
    if (chatSend && chatInput && chatMessages) {
        chatSend.addEventListener('click', () => sendChatMessage());
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    async function sendChatMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Show loading
        if (chatLoading) chatLoading.style.display = 'block';
        
        // Get AI response from backend
        try {
            const response = await fetch(`${API_BASE_URL}/ai-chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
            
            const data = await response.json();
            
            if (chatLoading) chatLoading.style.display = 'none';
            
            if (data.success) {
                addMessage(data.response, 'bot');
            } else {
                throw new Error(data.error || 'Failed to get response');
            }
        } catch (error) {
            console.error('Error getting AI response:', error);
            if (chatLoading) chatLoading.style.display = 'none';
            addMessage('Maaf, terjadi kesalahan. Silakan coba lagi.', 'bot');
        }
    }
}

function addMessage(text, type) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    messageDiv.style.animation = 'slideIn 0.3s ease';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// AI Report Generation
async function initAIReport() {
    const reportContainer = document.getElementById('ai-report');
    const refreshBtn = document.getElementById('refresh-report');
    
    // Generate initial report
    await generateAIReport();
    
    // Refresh button
    if (refreshBtn) {
        refreshBtn.style.display = 'block';
        refreshBtn.addEventListener('click', generateAIReport);
    }
}

async function generateAIReport() {
    const reportContainer = document.getElementById('ai-report');
    if (!reportContainer) return;
    
    // Show loading
    reportContainer.innerHTML = `
        <div class="loading-spinner" style="text-align: center; padding: 1rem;">
            <span>⏳ Menghasilkan laporan AI...</span>
        </div>
    `;
    
    try {
        const response = await fetch(`${API_BASE_URL}/ai-report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Replace <br> tags with actual line breaks for display
            const formattedReport = data.report.replace(/<br><br>/g, '\n\n').replace(/<br>/g, '\n');
            reportContainer.innerHTML = `<p style="font-size: 0.95rem; line-height: 1.8; color: #666; white-space: pre-line;">${formattedReport}</p>`;
        } else {
            throw new Error(data.error || 'Failed to generate report');
        }
    } catch (error) {
        console.error('Error generating AI report:', error);
        reportContainer.innerHTML = `
            <p style="font-size: 0.95rem; line-height: 1.8; color: #666; white-space: pre-line;">Terdeteksi peningkatan aktivitas Lalat Buah 30% di Perangkap #3 (Area Utara) pasca hujan.

Jumlah hama melonjak drastis dari rata-rata 70 ekor menjadi 127 ekor dalam 24 jam terakhir.

REKOMENDASI: Segera lakukan pengecekan dan pembersihan perangkap di area Utara.</p>
        `;
    }
}

// Gemini API Integration
async function getGeminiResponse(userMessage, mode = 'chatbot') {
    console.log('🔵 getGeminiResponse called with mode:', mode);
    console.log('🔵 User message:', userMessage);
    console.log('🔵 API Key present:', !!GEMINI_API_KEY);
    console.log('🔵 API URL:', GEMINI_API_URL);
    
    const contextData = `
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

    let prompt = '';
    
    if (mode === 'report') {
        prompt = `Kamu adalah AI asisten untuk sistem monitoring hama lalat buah di perkebunan jambu kristal. Berdasarkan data berikut, buatlah laporan analisis singkat dan rekomendasi dalam 2-3 kalimat (maksimal 100 kata). Gunakan bahasa Indonesia yang ramah dan mudah dipahami petani. Fokus pada insight penting dan rekomendasi actionable.

${contextData}

Buat laporan yang profesional namun mudah dipahami.`;
    } else {
        prompt = `Kamu adalah chatbot AI bernama "Pandriya" yang membantu petani jambu kristal memantau hama lalat buah. Jawab pertanyaan dengan ramah, singkat (maksimal 50 kata), dan mudah dipahami. Gunakan emoji yang sesuai.

${contextData}

Pertanyaan petani: ${userMessage}

Jawab dengan informatif dan membantu berdasarkan data di atas.`;
    }

    const requestBody = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
        }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
    // Handle different response formats with detailed logging
    try {
        // Priority 1: Check for direct text in response (some models return this)
        if (data.text) {
            console.log('✅ Found text directly in response:', data.text);
            return data.text;
        }
        
        // Priority 2: Check if we have candidates array
        if (!data.candidates || !Array.isArray(data.candidates) || data.candidates.length === 0) {
            console.error('❌ No candidates in response');
            throw new Error('No candidates in API response');
        }
        
        const candidate = data.candidates[0];
        console.log('Candidate:', JSON.stringify(candidate, null, 2));
        
        // Priority 3: Check for direct text in candidate
        if (candidate.text) {
            console.log('✅ Found text in candidate:', candidate.text);
            return candidate.text;
        }
        
        // Priority 4: Check for content object
        if (!candidate.content) {
            console.error('❌ No content in candidate');
            throw new Error('No content in candidate');
        }
        
        console.log('Content:', JSON.stringify(candidate.content, null, 2));
        
        // Priority 5: Check for text in content
        if (candidate.content.text) {
            console.log('✅ Found text in content:', candidate.content.text);
            return candidate.content.text;
        }
        
        // Priority 6: Check for parts array
        if (candidate.content.parts && Array.isArray(candidate.content.parts) && candidate.content.parts.length > 0) {
            const part = candidate.content.parts[0];
            console.log('Part:', JSON.stringify(part, null, 2));
            
            if (part.text) {
                console.log('✅ Found text in part:', part.text);
                return part.text;
            }
        }
        
        // If we reach here, log full structure for debugging
        console.error('❌ No text found in any expected location');
        console.error('Full data structure:', JSON.stringify(data, null, 2));
        throw new Error('No text found in response - check console for full structure');
        
    } catch (parseError) {
        console.error('❌ Error parsing response:', parseError);
        console.error('Full response:', JSON.stringify(data));
        throw new Error(`Failed to parse API response: ${parseError.message}`);
    }
}

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Performance: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Console message
console.log('%c🌿 Pandriya Dashboard', 'color: #388E3C; font-size: 20px; font-weight: bold;');
console.log('%cTim Pandriya - Innovillage 6th', 'color: #757575; font-size: 12px;');
console.log('%cMelindungi panen jambu kristal dengan teknologi IoT & AI', 'color: #FB8C00; font-size: 12px;');
