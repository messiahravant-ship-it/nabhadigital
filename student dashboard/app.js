// Enhanced Student Learning Dashboard Application JavaScript
// With Bootstrap 5 integration, fixed keyboard navigation, and working voice recognition

// Application data
const appData = {
    student: {
        name: "Arjun Singh",
        grade: "10th",
        points: 2850,
        level: 12,
        xp: 850,
        xp_to_next: 1000,
        badges: ["Quick Learner", "Math Wizard", "Science Explorer", "Voice Commander"],
        courses_completed: 8,
        current_streak: 15,
        voice_language: "en"
    },
    courses: [
        {
            id: 1,
            title: "Mathematics - Class 10",
            progress: 75,
            lessons: 20,
            completed: 15,
            thumbnail: "math-thumb.jpg",
            offline_available: true,
            icon: "fas fa-calculator"
        },
        {
            id: 2,
            title: "Science - Physics",
            progress: 60,
            lessons: 25,
            completed: 15,
            thumbnail: "physics-thumb.jpg",
            offline_available: true,
            icon: "fas fa-atom"
        },
        {
            id: 3,
            title: "English Grammar",
            progress: 90,
            lessons: 18,
            completed: 16,
            thumbnail: "english-thumb.jpg",
            offline_available: false,
            icon: "fas fa-book-open"
        },
        {
            id: 4,
            title: "History - Indian Freedom",
            progress: 45,
            lessons: 22,
            completed: 10,
            thumbnail: "history-thumb.jpg",
            offline_available: true,
            icon: "fas fa-landmark"
        }
    ],
    quizzes: [
        {
            id: 1,
            question: "What is the value of π (pi)?",
            options: ["3.14", "2.14", "4.14", "1.14"],
            correct: 0,
            explanation: "π (pi) is approximately 3.14159, commonly rounded to 3.14",
            points: 10
        },
        {
            id: 2,
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Mercury", "Earth", "Mars"],
            correct: 1,
            explanation: "Mercury is the smallest planet and the one closest to the Sun in our solar system",
            points: 10
        },
        {
            id: 3,
            question: "What is the square root of 144?",
            options: ["11", "12", "13", "14"],
            correct: 1,
            explanation: "√144 = 12 because 12 × 12 = 144",
            points: 10
        },
        {
            id: 4,
            question: "Who wrote the national anthem of India?",
            options: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
            correct: 0,
            explanation: "Jana Gana Mana was written by Nobel laureate Rabindranath Tagore",
            points: 15
        }
    ],
    leaderboard: [
        {"rank": 1, "name": "Simran Kaur", "points": 3200, "badge": "Scholar"},
        {"rank": 2, "name": "Arjun Singh", "points": 2850, "badge": "Explorer"},
        {"rank": 3, "name": "Preet Singh", "points": 2640, "badge": "Achiever"},
        {"rank": 4, "name": "Ravi Kumar", "points": 2420, "badge": "Learner"},
        {"rank": 5, "name": "Neha Sharma", "points": 2180, "badge": "Seeker"}
    ],
    voiceCommands: {
        "en": {
            "courses": ["courses", "my courses", "open courses", "show courses"],
            "quiz": ["quiz", "take quiz", "start quiz", "open quiz"],
            "profile": ["profile", "my profile", "show profile", "open profile"],
            "home": ["home", "dashboard", "main", "back"],
            "help": ["help", "assist", "chatbot", "support"],
            "leaderboard": ["leaderboard", "rankings", "scores"]
        },
        "hi": {
            "courses": ["कोर्स", "पाठ्यक्रम", "कोर्स दिखाओ"],
            "quiz": ["क्विज़", "परीक्षा", "क्विज़ शुरू करो"],
            "profile": ["प्रोफाइल", "मेरी प्रोफाइल"],
            "home": ["होम", "मुख्य", "डैशबोर्ड"],
            "help": ["मदद", "सहायता", "चैटबॉट"],
            "leaderboard": ["लीडरबोर्ड", "रैंकिंग"]
        },
        "pa": {
            "courses": ["ਕੋਰਸ", "ਕੋਰਸਾਂ", "ਕੋਰਸ ਦਿਖਾਓ"],
            "quiz": ["ਕੁਇਜ਼", "ਪਰੀਖਿਆ", "ਕੁਇਜ਼ ਸ਼ੁਰੂ ਕਰੋ"],
            "profile": ["ਪ੍ਰੋਫਾਈਲ", "ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ"],
            "home": ["ਘਰ", "ਮੁੱਖ", "ਡੈਸ਼ਬੋਰਡ"],
            "help": ["ਮਦਦ", "ਸਹਾਇਤਾ", "ਚੈਟਬੋਟ"],
            "leaderboard": ["ਲੀਡਰਬੋਰਡ", "ਰੈਂਕਿੰਗ"]
        }
    },
    chatbotResponses: {
        "en": {
            "greeting": "Hello! I'm here to help you learn. What would you like to know?",
            "math_help": "I can help with math problems! Try asking about algebra, geometry, or arithmetic.",
            "science_help": "For science questions, I can explain physics, chemistry, and biology concepts.",
            "quiz_help": "Take quizzes to test your knowledge and earn points. Each correct answer gives you points!",
            "default": "I'm here to help! Ask me about math, science, quizzes, or your courses."
        },
        "hi": {
            "greeting": "नमस्ते! मैं आपकी सीखने में मदद करने के लिए यहाँ हूँ। आप क्या जानना चाहते हैं?",
            "math_help": "मैं गणित की समस्याओं में मदद कर सकता हूँ! बीजगणित, ज्यामिति या अंकगणित के बारे में पूछें।",
            "science_help": "विज्ञान के प्रश्नों के लिए, मैं भौतिकी, रसायन और जीव विज्ञान की अवधारणाओं को समझा सकता हूँ।",
            "quiz_help": "अपने ज्ञान का परीक्षण करने और अंक अर्जित करने के लिए क्विज़ लें।",
            "default": "मैं मदद के लिए यहाँ हूँ! गणित, विज्ञान, क्विज़ या अपने कोर्स के बारे में पूछें।"
        },
        "pa": {
            "greeting": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਨੂੰ ਸਿੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਇੱਥੇ ਹਾਂ। ਤੁਸੀਂ ਕੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
            "math_help": "ਮੈਂ ਗਣਿਤ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ!",
            "science_help": "ਵਿਗਿਆਨ ਦੇ ਸਵਾਲਾਂ ਲਈ, ਮੈਂ ਭੌਤਿਕ ਵਿਗਿਆਨ ਦੀਆਂ ਧਾਰਨਾਵਾਂ ਸਮਝਾ ਸਕਦਾ ਹਾਂ।",
            "quiz_help": "ਆਪਣੇ ਗਿਆਨ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ ਕੁਇਜ਼ ਲਓ ਅਤੇ ਅੰਕ ਕਮਾਓ।",
            "default": "ਮੈਂ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ! ਗਣਿਤ, ਵਿਗਿਆਨ, ਕੁਇਜ਼ ਬਾਰੇ ਪੁੱਛੋ।"
        }
    },
    languages: {
        "en": {
            "dashboard": "Dashboard",
            "courses": "My Courses",
            "quiz": "Take Quiz",
            "profile": "Profile",
            "points": "Points",
            "level": "Level",
            "welcome": "Welcome back, Arjun!",
            "voice_listening": "Listening...",
            "voice_not_supported": "Voice not supported in this browser",
            "microphone_blocked": "Microphone access denied",
            "say_command": "Say a command...",
            "chat_with_ai": "Chat with AI Assistant",
            "type_message": "Type your message..."
        },
        "hi": {
            "dashboard": "डैशबोर्ड",
            "courses": "मेरे कोर्स",
            "quiz": "क्विज़ लें",
            "profile": "प्रोफाइल",
            "points": "अंक",
            "level": "स्तर",
            "welcome": "वापस स्वागत है, अर्जुन!",
            "voice_listening": "सुन रहा है...",
            "voice_not_supported": "इस ब्राउज़र में आवाज़ समर्थित नहीं है",
            "microphone_blocked": "माइक्रोफ़ोन एक्सेस अस्वीकृत",
            "say_command": "एक कमांड बोलें...",
            "chat_with_ai": "एआई असिस्टेंट से चैट करें",
            "type_message": "अपना संदेश लिखें..."
        },
        "pa": {
            "dashboard": "ਡੈਸ਼ਬੋਰਡ",
            "courses": "ਮੇਰੇ ਕੋਰਸ",
            "quiz": "ਕੁਇਜ਼ ਲਓ",
            "profile": "ਪ੍ਰੋਫਾਈਲ",
            "points": "ਅੰਕ",
            "level": "ਪੱਧਰ",
            "welcome": "ਮੁੜ ਸਵਾਗਤ ਹੈ, ਅਰਜੁਨ!",
            "voice_listening": "ਸੁਣ ਰਿਹਾ ਹੈ...",
            "voice_not_supported": "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ",
            "microphone_blocked": "ਮਾਈਕ੍ਰੋਫੋਨ ਪਹੁੰਚ ਅਸਵੀਕਾਰ",
            "say_command": "ਇੱਕ ਕਮਾਂਡ ਕਹੋ...",
            "chat_with_ai": "ਏਆਈ ਸਹਾਇਕ ਨਾਲ ਚੈਟ ਕਰੋ",
            "type_message": "ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ..."
        }
    }
};

// Global variables
let currentLanguage = 'en';
let currentSection = 'dashboard';
let recognition = null;
let isVoiceActive = false;
let currentQuizIndex = 0;
let quizScore = 0;
let answeredQuestions = new Set();

// Enhanced UI Controller Class
class UIController {
    static showToast(message, type = 'info', duration = 3000) {
        const toastContainer = document.getElementById('toast-container') || UIController.createToastContainer();

        const toastElement = document.createElement('div');
        toastElement.className = `toast align-items-center text-white bg-${type} border-0 show`;
        toastElement.setAttribute('role', 'alert');
        toastElement.setAttribute('aria-live', 'assertive');
        toastElement.setAttribute('aria-atomic', 'true');

        toastElement.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    <i class="fas fa-${UIController.getToastIcon(type)} me-2"></i>
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
        `;

        toastContainer.appendChild(toastElement);

        // Auto remove after duration
        setTimeout(() => {
            if (toastElement && toastElement.parentNode) {
                toastElement.remove();
            }
        }, duration);
    }

    static createToastContainer() {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'position-fixed top-0 end-0 p-3';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
        return container;
    }

    static getToastIcon(type) {
        const icons = {
            'success': 'check-circle',
            'danger': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle',
            'primary': 'star'
        };
        return icons[type] || 'info-circle';
    }

    static animateElement(element, animationType = 'fadeIn', duration = 300) {
        return new Promise(resolve => {
            element.style.animation = `${animationType} ${duration}ms ease-out`;
            setTimeout(() => {
                element.style.animation = '';
                resolve();
            }, duration);
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    initializeApp();

    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
});

function initializeApp() {
    console.log('Initializing application...');
    setupEventListeners();
    setupKeyboardNavigation();
    initializeVoiceRecognition();
    updateLanguage();
    showSection('dashboard');
    loadUserData();
    initializeProgressBars();

    // Show welcome message
    setTimeout(() => {
        UIController.showToast('Welcome to Smart Learning Dashboard!', 'success', 4000);
    }, 1000);
}

function setupEventListeners() {
    console.log('Setting up event listeners...');

    // Navigation links
    document.querySelectorAll('.custom-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                navigateToSection(section, this);
            }
        });
    });

    // Language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            updateLanguage();
            UIController.showToast('Language updated successfully!', 'success');
        });
    }

    // Voice button
    const voiceBtn = document.getElementById('voice-btn');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', function() {
            toggleVoiceRecognition();
        });
    }

    // Chatbot input

    // Quiz options
    document.addEventListener('click', function(e) {
        if (e.target.matches('.quiz-option') || e.target.closest('.quiz-option')) {
            const button = e.target.matches('.quiz-option') ? e.target : e.target.closest('.quiz-option');
            const answerIndex = parseInt(button.getAttribute('data-answer'));
            selectQuizAnswer(answerIndex, button);
        }
    });

    // Quiz controls
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    const hintBtn = document.getElementById('quiz-hint');
    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }

    console.log('Event listeners set up successfully');
}

function setupKeyboardNavigation() {
    console.log('Setting up keyboard navigation...');

    document.addEventListener('keydown', function(e) {
        // Handle keyboard navigation
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    navigateToSection('dashboard');
                    UIController.showToast('Switched to Dashboard', 'info');
                    break;
                case '2':
                    e.preventDefault();
                    navigateToSection('courses');
                    UIController.showToast('Switched to Courses', 'info');
                    break;
                case '3':
                    e.preventDefault();
                    navigateToSection('quiz');
                    UIController.showToast('Switched to Quiz', 'info');
                    break;
                case '4':
                    e.preventDefault();
                    navigateToSection('profile');
                    UIController.showToast('Switched to Profile', 'info');
                    break;
                case '5':
                    e.preventDefault();
                    navigateToSection('leaderboard');
                    UIController.showToast('Switched to Leaderboard', 'info');
                    break;
                case 'v':
                    e.preventDefault();
                    toggleVoiceRecognition();
                    break;
                case 'h':
                    e.preventDefault();
                    openChatbot();
                    break;
            }
        }

        // Handle quiz navigation
        if (currentSection === 'quiz' && !answeredQuestions.has(currentQuizIndex)) {
            if (e.key >= '1' && e.key <= '4') {
                e.preventDefault();
                const answerIndex = parseInt(e.key) - 1;
                const optionButton = document.querySelector(`.quiz-option[data-answer="${answerIndex}"]`);
                if (optionButton) {
                    selectQuizAnswer(answerIndex, optionButton);
                }
            }
        }

        // Handle Enter key for focused elements
        if (e.key === 'Enter' && e.target.matches('.custom-nav-link')) {
            e.preventDefault();
            e.target.click();
        }
    });

    console.log('Keyboard navigation set up successfully');
}

function navigateToSection(sectionName, linkElement = null) {
    console.log(`Navigating to section: ${sectionName}`);

    // Update navigation active state
    document.querySelectorAll('.custom-nav-link').forEach(link => {
        link.classList.remove('active');
        link.setAttribute('aria-selected', 'false');
    });

    if (linkElement) {
        linkElement.classList.add('active');
        linkElement.setAttribute('aria-selected', 'true');
    } else {
        const targetLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
            targetLink.setAttribute('aria-selected', 'true');
        }
    }

    showSection(sectionName);
}

function showSection(sectionName) {
    console.log(`Showing section: ${sectionName}`);

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('d-none');
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.remove('d-none');
        targetSection.classList.add('active');

        // Initialize section-specific functionality
        if (sectionName === 'quiz') {
            initializeQuiz();
        }
    }

    currentSection = sectionName;
}

// Voice Recognition Functions
function initializeVoiceRecognition() {
    console.log('Initializing voice recognition...');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.warn('Speech recognition not supported in this browser');
        UIController.showToast('Voice recognition not supported in this browser', 'warning');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = getVoiceLanguage();

    recognition.onstart = function() {
        console.log('Voice recognition started');
        isVoiceActive = true;
        updateVoiceUI(true);
        showVoiceIndicator();
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        console.log('Voice command received:', transcript);
        processVoiceCommand(transcript);
    };

    recognition.onerror = function(event) {
        console.error('Voice recognition error:', event.error);
        handleVoiceError(event.error);
        stopVoiceRecognition();
    };

    recognition.onend = function() {
        console.log('Voice recognition ended');
        stopVoiceRecognition();
    };

    console.log('Voice recognition initialized successfully');
}

function toggleVoiceRecognition() {
    if (isVoiceActive) {
        stopVoiceRecognition();
    } else {
        startVoiceRecognition();
    }
}

function startVoiceRecognition() {
    if (!recognition) {
        initializeVoiceRecognition();
    }

    if (recognition) {
        try {
            recognition.lang = getVoiceLanguage();
            recognition.start();
            UIController.showToast('Voice recognition started', 'info');
        } catch (error) {
            console.error('Failed to start voice recognition:', error);
            UIController.showToast('Failed to start voice recognition', 'danger');
        }
    }
}

function stopVoiceRecognition() {
    if (recognition && isVoiceActive) {
        recognition.stop();
    }
    isVoiceActive = false;
    updateVoiceUI(false);
    hideVoiceIndicator();
}

function updateVoiceUI(listening) {
    const voiceBtn = document.getElementById('voice-btn');
    const voiceIcon = document.getElementById('voice-icon');
    const voiceStatus = document.getElementById('voice-status');

    if (voiceBtn && voiceIcon && voiceStatus) {
        if (listening) {
            voiceBtn.classList.add('listening');
            voiceIcon.className = 'fas fa-stop me-1';
            voiceStatus.textContent = getTranslation('voice_listening');
        } else {
            voiceBtn.classList.remove('listening');
            voiceIcon.className = 'fas fa-microphone me-1';
            voiceStatus.textContent = 'Voice';
        }
    }
}

function processVoiceCommand(command) {
    console.log('Processing voice command:', command);
    const commands = appData.voiceCommands[currentLanguage] || appData.voiceCommands['en'];
    let commandFound = false;

    // Check for navigation commands
    for (const [action, phrases] of Object.entries(commands)) {
        if (phrases.some(phrase => command.includes(phrase))) {
            executeVoiceCommand(action);
            commandFound = true;
            break;
        }
    }

    // Check for quiz answer commands
    if (currentSection === 'quiz' && !commandFound) {
        const answerIndex = getAnswerFromVoice(command);
        if (answerIndex !== -1) {
            const option = document.querySelector(`.quiz-option[data-answer="${answerIndex}"]`);
            if (option) {
                selectQuizAnswer(answerIndex, option);
                commandFound = true;
            }
        }
    }

    if (!commandFound) {
        speakText(getTranslation('say_command'));
        UIController.showToast('Command not recognized. Try again!', 'warning');
    }
}

function executeVoiceCommand(action) {
    console.log('Executing voice command:', action);

    switch (action) {
        case 'courses':
            navigateToSection('courses');
            speakText('Opening courses');
            UIController.showToast('Opening courses section', 'success');
            break;
        case 'quiz':
            navigateToSection('quiz');
            speakText('Opening quiz');
            UIController.showToast('Opening quiz section', 'success');
            break;
        case 'profile':
            navigateToSection('profile');
            speakText('Opening profile');
            UIController.showToast('Opening profile section', 'success');
            break;
        case 'home':
            navigateToSection('dashboard');
            speakText('Going to dashboard');
            UIController.showToast('Going to dashboard', 'success');
            break;
        case 'help':
            openChatbot();
            speakText('Opening assistant');
            UIController.showToast('Opening AI assistant', 'success');
            break;
        case 'leaderboard':
            navigateToSection('leaderboard');
            speakText('Opening leaderboard');
            UIController.showToast('Opening leaderboard section', 'success');
            break;
    }
}

function showVoiceIndicator() {
    const indicator = document.getElementById('voice-indicator');
    if (indicator) {
        indicator.classList.remove('d-none');
    }
}

function hideVoiceIndicator() {
    const indicator = document.getElementById('voice-indicator');
    if (indicator) {
        indicator.classList.add('d-none');
    }
}

function getVoiceLanguage() {
    const voiceLanguageMap = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'pa': 'pa-IN'
    };
    return voiceLanguageMap[currentLanguage] || 'en-US';
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = getVoiceLanguage();
        speechSynthesis.speak(utterance);
    }
}

function handleVoiceError(error) {
    let message = 'Voice recognition error occurred';

    switch (error) {
        case 'not-allowed':
            message = 'Microphone access denied';
            break;
        case 'no-speech':
            message = 'No speech detected';
            break;
        case 'network':
            message = 'Network error occurred';
            break;
        default:
            message = 'Voice recognition error';
    }

    UIController.showToast(message, 'warning');
}

// Quiz Functions
function initializeQuiz() {
    console.log('Initializing quiz...');
    currentQuizIndex = 0;
    quizScore = 0;
    answeredQuestions.clear();

    loadQuizQuestion();
    updateQuizProgress();
}

function loadQuizQuestion() {
    if (currentQuizIndex >= appData.quizzes.length) {
        showQuizResult();
        return;
    }

    const question = appData.quizzes[currentQuizIndex];
    const questionElement = document.getElementById('quiz-question');
    const options = document.querySelectorAll('.quiz-option');
    const nextBtn = document.getElementById('quiz-next');
    const resultDiv = document.getElementById('quiz-result');

    // Update question
    if (questionElement) {
        questionElement.textContent = question.question;
    }

    // Update options
    options.forEach((option, index) => {
        if (question.options[index]) {
            option.innerHTML = `<i class="fas fa-circle me-2 small"></i>${question.options[index]}`;
            option.disabled = false;
            option.className = 'quiz-option btn btn-outline-primary-custom w-100 h-100 py-3';
        }
    });

    // Hide next button and result
    if (nextBtn) {
        nextBtn.classList.add('d-none');
    }

    if (resultDiv) {
        resultDiv.classList.add('d-none');
    }
}

function selectQuizAnswer(answerIndex, optionElement) {
    if (answeredQuestions.has(currentQuizIndex)) {
        return;
    }

    console.log(`Quiz answer selected: ${answerIndex}`);

    const question = appData.quizzes[currentQuizIndex];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = answerIndex === question.correct;
    const nextBtn = document.getElementById('quiz-next');

    answeredQuestions.add(currentQuizIndex);

    // Disable all options and show results
    options.forEach((option, index) => {
        option.disabled = true;

        if (index === question.correct) {
            option.classList.remove('btn-outline-primary-custom');
            option.classList.add('btn-success-custom');
        } else if (index === answerIndex && !isCorrect) {
            option.classList.remove('btn-outline-primary-custom');
            option.classList.add('btn-danger');
        }
    });

    // Update score and show feedback
    if (isCorrect) {
        quizScore += question.points;
        speakText('Correct!');
        UIController.showToast(`Correct! +${question.points} points`, 'success');
    } else {
        speakText(`Incorrect. The correct answer is: ${question.options[question.correct]}`);
        UIController.showToast(`Incorrect. The correct answer is: ${question.options[question.correct]}`, 'danger');
    }

    // Show explanation
    setTimeout(() => {
        UIController.showToast(question.explanation, 'info', 4000);
    }, 1500);

    // Show next button
    if (nextBtn) {
        nextBtn.classList.remove('d-none');
    }
}

function nextQuestion() {
    currentQuizIndex++;
    updateQuizProgress();
    loadQuizQuestion();
}

function updateQuizProgress() {
    const progressBar = document.getElementById('quiz-progress');
    const counter = document.getElementById('quiz-counter');
    const progress = ((currentQuizIndex + 1) / appData.quizzes.length) * 100;

    if (progressBar) {
        progressBar.style.width = progress + '%';
    }

    if (counter) {
        counter.textContent = `Question ${currentQuizIndex + 1} of ${appData.quizzes.length}`;
    }
}

function showQuizResult() {
    const resultElement = document.getElementById('quiz-result');
    const scoreElement = document.getElementById('final-score');
    const pointsElement = document.getElementById('points-earned');

    if (resultElement) {
        resultElement.classList.remove('d-none');
    }

    if (scoreElement) {
        const correctAnswers = answeredQuestions.size;
        scoreElement.textContent = `${correctAnswers}/${appData.quizzes.length}`;
    }

    if (pointsElement) {
        pointsElement.textContent = `+${quizScore}`;
    }

    // Update user data
    appData.student.points += quizScore;
    updateUserStats();

    speakText(`Quiz completed! You scored ${quizScore} points!`);
    UIController.showToast(`🎉 Quiz completed! You earned ${quizScore} points!`, 'success', 5000);
}

function restartQuiz() {
    initializeQuiz();
}

function showHint() {
    const question = appData.quizzes[currentQuizIndex];
    if (question && question.explanation) {
        const hintText = 'Hint: ' + question.explanation.substring(0, 50) + '...';
        UIController.showToast(hintText, 'info', 4000);
    }
}

function getAnswerFromVoice(command) {
    const patterns = ['one', '1', 'first', 'two', '2', 'second', 'three', '3', 'third', 'four', '4', 'fourth'];

    if (command.includes('one') || command.includes('1') || command.includes('first')) return 0;
    if (command.includes('two') || command.includes('2') || command.includes('second')) return 1;
    if (command.includes('three') || command.includes('3') || command.includes('third')) return 2;
    if (command.includes('four') || command.includes('4') || command.includes('fourth')) return 3;

    return -1;
}

// Chatbot Functions


function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    if (!input || !messagesContainer) return;

    const message = input.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    input.value = '';

    // Generate bot response
    setTimeout(() => {
        const response = generateBotResponse(message.toLowerCase());
        addChatMessage(response, 'bot');
    }, 500);
}

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'd-flex align-items-start mb-3';

    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <i class="fas fa-robot text-primary-custom me-3 mt-1"></i>
            <div class="message-content bg-light p-3 rounded-3">
                ${message}
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content bg-primary-custom text-white p-3 rounded-3 ms-auto">
                ${message}
            </div>
        `;
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(message) {
    const responses = appData.chatbotResponses[currentLanguage] || appData.chatbotResponses['en'];

    if (message.includes('math') || message.includes('गणित') || message.includes('ਗਣਿਤ')) {
        return responses.math_help;
    } else if (message.includes('science') || message.includes('विज्ञान') || message.includes('ਵਿਗਿਆਨ')) {
        return responses.science_help;
    } else if (message.includes('quiz') || message.includes('क्विज़') || message.includes('ਕੁਇਜ਼')) {
        return responses.quiz_help;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('नमस्ते') || message.includes('ਸਤ ਸ੍ਰੀ ਅਕਾਲ')) {
        return responses.greeting;
    } else {
        return responses.default;
    }
}

function askQuickQuestion(type) {
    const responses = appData.chatbotResponses[currentLanguage] || appData.chatbotResponses['en'];
    let response = '';

    switch (type) {
        case 'math':
            response = responses.math_help;
            break;
        case 'science':
            response = responses.science_help;
            break;
        case 'quiz':
            response = responses.quiz_help;
            break;
        default:
            response = responses.default;
    }

    addChatMessage(response, 'bot');
}

// Course Functions
function openCourse(courseId) {
    const course = appData.courses.find(c => c.id === courseId);
    if (!course) return;

    const modal = document.getElementById('course-modal');
    const titleElement = document.getElementById('course-title');

    if (modal && titleElement) {
        titleElement.textContent = course.title;
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    }
}

function markComplete() {
    UIController.showToast('Lesson marked as complete! +50 XP', 'success');
    appData.student.xp += 50;

    if (appData.student.xp >= appData.student.xp_to_next) {
        levelUp();
    }

    updateUserStats();
}

function levelUp() {
    appData.student.level++;
    appData.student.xp = 0;
    appData.student.xp_to_next += 200;

    UIController.showToast(`🎉 Level Up! You're now Level ${appData.student.level}!`, 'success', 5000);
    speakText(`Congratulations! You reached level ${appData.student.level}!`);
}

// Utility Functions
function updateLanguage() {
    const translations = appData.languages[currentLanguage] || appData.languages['en'];
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    if (recognition) {
        recognition.lang = getVoiceLanguage();
    }
}

function getTranslation(key) {
    const translations = appData.languages[currentLanguage] || appData.languages['en'];
    return translations[key] || key;
}

function loadUserData() {
    const savedData = localStorage.getItem('studentData');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            Object.assign(appData.student, parsedData);
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }
    updateUserStats();
}

function updateUserStats() {
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card h3');
    if (statCards.length >= 4) {
        animateNumber(statCards[0], 0, appData.student.points, 1000);
        animateNumber(statCards[1], 0, appData.student.level, 1000);
        animateNumber(statCards[2], 0, appData.student.current_streak, 1000);
        animateNumber(statCards[3], 0, appData.student.courses_completed, 1000);
    }

    // Update progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const progressPercent = (appData.student.xp / appData.student.xp_to_next) * 100;
        progressBar.style.width = progressPercent + '%';
    }

    // Save to localStorage
    try {
        localStorage.setItem('studentData', JSON.stringify(appData.student));
    } catch (error) {
        console.error('Error saving user data:', error);
    }
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = Math.round(start + (difference * progress));
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width || '0%';
                progressBar.style.width = '0%';

                setTimeout(() => {
                    progressBar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
                    progressBar.style.width = targetWidth;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

console.log('Smart Learning Dashboard JavaScript loaded successfully');



