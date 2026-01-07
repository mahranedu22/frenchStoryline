/* ====================================
   STATE MANAGEMENT - إدارة الحالة
   ==================================== */

let currentPage = 'landingPage';
let currentLearningStyle = null;
let currentModuleId = null;
let currentLessonId = null;
let currentLessonTab = 'objectives';
let currentAudio = null;
let studentName = '';

/* ====================================
   PAGE NAVIGATION - التنقل بين الصفحات
   ==================================== */

function showPage(pageId) {
    // Play click sound
    playClickSound();
    
    // Stop any playing audio when changing pages
    stopCurrentAudio();
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;
    
    // Load content based on page
    if (pageId === 'modulesPage') {
        loadModules();
    }
}

function goToHome() {
    showPage('landingPage');
}

/* ====================================
   AUDIO PLAYBACK - تشغيل الصوت
   ==================================== */

function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Play click sound for buttons
function playClickSound() {
    // Try to play audio file first
    const clickSound = new Audio('audio/click.mp3');
    clickSound.volume = 0.3;
    clickSound.play().catch(() => {
        // If file not found, create a simple beep using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800; // Frequency in Hz
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Click sound not available');
        }
    });
}

function playWelcomeAudio() {
    stopCurrentAudio();
    currentAudio = new Audio('audio/lecontent0.mp3');
    currentAudio.play().catch(error => {
        console.log('Audio file not found:', error);
        alert('الملف الصوتي غير متوفر');
    });
}

function playAudio(audioFile) {
    stopCurrentAudio();
    currentAudio = new Audio(audioFile);
    currentAudio.play().catch(error => {
        console.log('Audio file not found:', audioFile);
    });
}

// New function for content audio
function playContentAudio() {
    stopCurrentAudio();
    currentAudio = new Audio('audio/content1.mp3');
    currentAudio.play().catch(error => {
        console.log('Audio file not found:', error);
        alert('الملف الصوتي غير متوفر');
    });
}

/* ====================================
   MODULES FUNCTIONS - وظائف الموديولات
   ==================================== */

function loadModules() {
    const container = document.getElementById('modulesGrid');
    container.innerHTML = '';
    
    // Create 6 module buttons (only first one is active)
    Object.keys(modulesData).forEach((key, index) => {
        const module = modulesData[key];
        const moduleNumber = index + 1;
        
        const moduleBtn = document.createElement('button');
        moduleBtn.className = 'module-button';
        
        // Only Module 1 is enabled
        if (moduleNumber > 1) {
            moduleBtn.disabled = true;
        }
        
        moduleBtn.innerHTML = `
            <div class="module-number">Module ${moduleNumber}</div>
            <div>${module.title}</div>
        `;
        
        if (moduleNumber === 1) {
            moduleBtn.onclick = () => openModule(module.id);
        }
        
        container.appendChild(moduleBtn);
    });
    
    // Add placeholders for modules 4, 5, 6
    for (let i = 4; i <= 6; i++) {
        const placeholderBtn = document.createElement('button');
        placeholderBtn.className = 'module-button';
        placeholderBtn.disabled = true;
        placeholderBtn.innerHTML = `
            <div class="module-number">Module ${i}</div>
            <div>الموديول ${['الرابع', 'الخامس', 'السادس'][i-4]}</div>
        `;
        container.appendChild(placeholderBtn);
    }
}

function openModule(moduleId) {
    // Play click sound
    playClickSound();
    
    currentModuleId = moduleId;
    const module = modulesData[moduleId];
    
    // For now, directly open first lesson
    if (module.lessons.length > 0) {
        openLesson(module.lessons[0].id);
    }
}

function openLesson(lessonId) {
    currentLessonId = lessonId;
    currentLessonTab = 'objectives';
    
    const module = modulesData[currentModuleId];
    const lesson = module.lessons.find(l => l.id === lessonId);
    
    // Set lesson title OUTSIDE the board
    document.getElementById('lessonTitleOutside').innerHTML = `
        <h1>${lesson.titleFr}</h1>
        <h2>${lesson.title}</h2>
    `;
    
    showPage('lessonPage');
    switchLessonTab('objectives');
}

/* ====================================
   LESSON TAB SWITCHING - التبديل بين تبويبات الدرس
   ==================================== */

function switchLessonTab(tabName) {
    // Play click sound
    playClickSound();
    
    // Stop any playing audio when switching tabs
    stopCurrentAudio();
    
    currentLessonTab = tabName;
    
    // Update sidebar buttons
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const buttonMap = {
        'objectives': 'btnObjectives',
        'content': 'btnContent',
        'activities': 'btnActivities'
    };
    
    document.getElementById(buttonMap[tabName]).classList.add('active');
    
    // Load content based on tab
    const contentArea = document.getElementById('mainContentArea');
    
    switch(tabName) {
        case 'objectives':
            loadObjectivesContent(contentArea);
            break;
        case 'content':
            loadVideoContent(contentArea);
            break;
        case 'activities':
            loadActivitiesContent(contentArea);
            break;
    }
}

/* ====================================
   LOAD TAB CONTENT - تحميل محتوى التبويبات
   ==================================== */

function loadObjectivesContent(container) {
    const module = modulesData[currentModuleId];
    const lesson = module.lessons.find(l => l.id === currentLessonId);
    
    const objectivesHTML = `
        <div style="background: linear-gradient(135deg, #8B4513, #654321); color: white; padding: 40px; border-radius: 10px; height: 100%; display: flex; flex-direction: column; justify-content: center;">
            <h3 style="font-size: 1.8rem; margin-bottom: 25px; color: #FFD700; text-align: center; font-weight: bold;">
                Objectifs d'apprentissage à la fin de la leçon: Les parties de la phrase
            </h3>
            <p style="font-size: 1.3rem; margin-bottom: 25px; color: white; font-weight: bold;">
                À la fin de cette leçon, l'élève sera capable de :
            </p>
            <ol style="list-style: decimal; padding-right: 30px; color: white; font-size: 1.15rem; line-height: 2.2;">
                ${lesson.objectives.map(obj => `
                    <li style="margin-bottom: 18px; font-weight: 500;">${obj}</li>
                `).join('')}
            </ol>
        </div>
    `;
    
    container.innerHTML = objectivesHTML;
}

function loadVideoContent(container) {
    const module = modulesData[currentModuleId];
    const lesson = module.lessons.find(l => l.id === currentLessonId);
    
    let contentHTML = '';
    
    // Check learning style
    if (currentLearningStyle === '222' || currentLearningStyle === '333') {
        // Audio only for style 222/333
        contentHTML = `
            <div class="audio-content">
                <h3 style="color: var(--button-red); font-size: 2rem; margin-bottom: 30px;">
                    المحتوى الصوتي
                </h3>
                <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 30px;">
                    <div class="audio-icon" id="contentAudioIcon" style="width: 150px; height: 150px; font-size: 5rem; cursor: pointer;">
                        🔊
                    </div>
                    <p style="font-size: 1.3rem; color: var(--text-dark);">
                        اضغط على أيقونة السماعة للاستماع للمحتوى
                    </p>
                    <audio controls class="audio-player" id="contentAudioPlayer" style="display: none;">
                        <source src="audio/content1.mp3" type="audio/mpeg">
                        المتصفح لا يدعم تشغيل الصوت
                    </audio>
                </div>
            </div>
        `;
    } else {
        // Video for style 111 (audio-visual)
        contentHTML = `
            <div style="text-align: center;">
                <div class="video-container">
                    <video controls>
                        <source src="${lesson.videoFile}" type="video/mp4">
                        المتصفح لا يدعم تشغيل الفيديو
                    </video>
                </div>
                <p style="margin-top: 20px; color: var(--text-dark); font-size: 1.1rem;">
                    ${lesson.description}
                </p>
            </div>
        `;
    }
    
    container.innerHTML = contentHTML;
    
    // Add event listener for audio icon after content is loaded
    if (currentLearningStyle === '222' || currentLearningStyle === '333') {
        const audioIcon = document.getElementById('contentAudioIcon');
        if (audioIcon) {
            audioIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                playContentAudio();
            });
        }
    }
}

// New function for content audio
function playContentAudio() {
    stopCurrentAudio();
    currentAudio = new Audio('audio/content1.mp3');
    currentAudio.play().catch(error => {
        console.log('Audio file not found:', error);
        alert('الملف الصوتي غير متوفر');
    });
}

function loadActivitiesContent(container) {
    const module = modulesData[currentModuleId];
    const lesson = module.lessons.find(l => l.id === currentLessonId);
    
    const activitiesHTML = `
        <div id="activitiesContent">
            <!-- Questions will be loaded here -->
        </div>
    `;
    
    container.innerHTML = activitiesHTML;
    
    // Initialize questions
    initializeQuestions();
}

/* ====================================
   LEARNING STYLE SELECTION
   ==================================== */

function submitLearningStyle() {
    playClickSound();
    
    const name = document.getElementById('studentName').value.trim();
    const styleCode = document.getElementById('styleNumber').value.trim();
    
    if (!name) {
        alert('يرجى إدخال اسمك');
        return;
    }
    
    if (styleCode !== '111' && styleCode !== '222') {
        alert('نمط غير صحيح! يرجى إدخال 111 أو 222');
        return;
    }
    
    studentName = name;
    currentLearningStyle = styleCode;
    
    // Save to localStorage
    try {
        localStorage.setItem('studentName', name);
        localStorage.setItem('currentLearningStyle', styleCode);
    } catch(e) {
        console.log('Cannot save to localStorage');
    }
    
    showPage('welcomePage');
}

function selectLearningStyle(styleCode) {
    // This function is now deprecated but kept for compatibility
    playClickSound();
    
    const validStyles = ['111', '222', '333'];
    
    if (!validStyles.includes(styleCode)) {
        alert('رمز النمط غير صحيح! يرجى إدخال 111 أو 222 أو 333');
        return;
    }
    
    currentLearningStyle = styleCode;
    
    // Save to localStorage
    try {
        localStorage.setItem('currentLearningStyle', styleCode);
    } catch(e) {
        console.log('Cannot save to localStorage');
    }
    
    showPage('modulesPage');
}

/* ====================================
   INITIALIZATION - التهيئة
   ==================================== */

window.addEventListener('DOMContentLoaded', () => {
    // Try to load saved learning style
    try {
        const savedStyle = localStorage.getItem('currentLearningStyle');
        const savedName = localStorage.getItem('studentName');
        if (savedStyle) {
            currentLearningStyle = savedStyle;
        } else {
            // Default to visual style
            currentLearningStyle = '111';
        }
        if (savedName) {
            studentName = savedName;
        }
    } catch(e) {
        currentLearningStyle = '111';
    }
    
    // Stop audio when clicking anywhere on the page
    document.addEventListener('click', function(event) {
        // Check if click is NOT on audio icon
        if (!event.target.closest('.audio-icon') && 
            !event.target.closest('.audio-player')) {
            stopCurrentAudio();
        }
    });
    
    // Setup intro video
    const introVideo = document.getElementById('introVideo');
    const skipBtn = document.getElementById('skipIntroBtn');
    
    if (introVideo && skipBtn) {
        // Show skip button after 3 seconds
        setTimeout(() => {
            skipBtn.style.display = 'block';
        }, 3000);
        
        // Auto-skip when video ends
        introVideo.addEventListener('ended', () => {
            showPage('stylesPage');
        });
    }
    
    console.log('French Learning Platform Initialized');
    console.log('Current Learning Style:', currentLearningStyle);
});

/* ====================================
   BACKWARDS COMPATIBILITY
   ==================================== */

function backToModules() {
    showPage('modulesPage');
}
