/* ====================================
   QUESTIONS LOGIC - منطق الأسئلة
   ==================================== */

const questionsManager = {
    currentQuestionIndex: 0,
    userAnswers: [],
    correctAnswers: 0,
    
    // Get current question
    getCurrentQuestion() {
        const module = modulesData[currentModuleId];
        const lesson = module.lessons.find(l => l.id === currentLessonId);
        const exercises = currentLearningStyle === '111' ? 
            exercisesData.visualHigh : exercisesData.visualLow;
        
        // Get MCQ exercises only
        const mcqExercises = exercises.filter(ex => ex.type === 'mcq');
        const allQuestions = [];
        
        mcqExercises.forEach(exercise => {
            exercise.questions.forEach(q => {
                allQuestions.push({
                    question: q.question,
                    options: q.options,
                    correct: q.correct,
                    exerciseId: exercise.id
                });
            });
        });
        
        return allQuestions[this.currentQuestionIndex];
    },
    
    // Get total questions count
    getTotalQuestions() {
        const exercises = currentLearningStyle === '111' ? 
            exercisesData.visualHigh : exercisesData.visualLow;
        const mcqExercises = exercises.filter(ex => ex.type === 'mcq');
        let total = 0;
        mcqExercises.forEach(ex => total += ex.questions.length);
        return total;
    },
    
    // Check if answer is correct
    checkAnswer(selectedAnswer) {
        const currentQ = this.getCurrentQuestion();
        const isCorrect = selectedAnswer === currentQ.correct;
        
        this.userAnswers.push({
            question: currentQ.question,
            selected: selectedAnswer,
            correct: currentQ.correct,
            isCorrect: isCorrect
        });
        
        if (isCorrect) {
            this.correctAnswers++;
        }
        
        return isCorrect;
    },
    
    // Move to next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.getTotalQuestions() - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    },
    
    // Move to previous question
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    },
    
    // Reset questions
    reset() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.correctAnswers = 0;
    },
    
    // Get progress percentage
    getProgress() {
        return Math.round((this.currentQuestionIndex / this.getTotalQuestions()) * 100);
    },
    
    // Check if quiz is completed
    isCompleted() {
        return this.currentQuestionIndex >= this.getTotalQuestions() - 1;
    }
};

/* ====================================
   UI FUNCTIONS FOR QUESTIONS
   ==================================== */

function renderQuestion() {
    const question = questionsManager.getCurrentQuestion();
    const totalQuestions = questionsManager.getTotalQuestions();
    const currentIndex = questionsManager.currentQuestionIndex;
    
    const questionHTML = `
        <div class="storyline-question-container">
            <!-- Question Header with Character -->
            <div class="question-header">
                <div class="question-character">
                    <img src="images/questionCharacter.png" alt="Character" onerror="this.style.display='none'">
                </div>
                <div class="question-counter">
                    السؤال ${currentIndex + 1} من ${totalQuestions}
                </div>
            </div>
            
            <!-- Question Text -->
            <div class="question-text-box">
                <p>${question.question}</p>
            </div>
            
            <!-- Answer Options -->
            <div class="answer-options">
                ${question.options.map((option, index) => `
                    <button class="answer-btn" onclick="handleAnswerClick('${option}', this)" data-option="${option}">
                        <span class="option-label">${String.fromCharCode(65 + index)}.</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>
            
            <!-- Feedback Area (Initially Hidden) -->
            <div class="feedback-area" id="feedbackArea" style="display: none;">
                <div class="feedback-content">
                    <img id="feedbackIcon" src="" alt="" style="width: 60px; height: 60px;">
                    <p id="feedbackText"></p>
                </div>
            </div>
            
            <!-- Navigation Arrows -->
            <div class="question-navigation">
                <button class="nav-arrow prev-arrow" id="prevArrow" onclick="moveToPreviousQuestion()" 
                        style="display: ${currentIndex > 0 ? 'flex' : 'none'};">
                    ▶
                </button>
                <button class="nav-arrow next-arrow" id="nextArrow" onclick="moveToNextQuestion()" style="display: none;">
                    ◀
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('activitiesContent').innerHTML = questionHTML;
}

function handleAnswerClick(selectedAnswer, buttonElement) {
    // Play click sound
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
    
    // Disable all buttons
    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });
    
    // Check answer
    const isCorrect = questionsManager.checkAnswer(selectedAnswer);
    const currentQ = questionsManager.getCurrentQuestion();
    
    // Show feedback
    const feedbackArea = document.getElementById('feedbackArea');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    
    if (isCorrect) {
        // Correct answer - only highlight selected
        buttonElement.classList.add('correct-answer');
        
        // Show next arrow ONLY if correct (no feedback text)
        if (questionsManager.currentQuestionIndex < questionsManager.getTotalQuestions() - 1) {
            document.getElementById('nextArrow').style.display = 'flex';
        } else {
            // Last question - show completion
            setTimeout(() => showQuizCompletion(), 800);
        }
    } else {
        // Wrong answer - show feedback but DON'T show correct answer
        buttonElement.classList.add('wrong-answer');
        
        // DON'T show next arrow - user stays on same question
        // Re-enable buttons after 1 second
        setTimeout(() => {
            allButtons.forEach(btn => {
                btn.disabled = false;
                btn.style.cursor = 'pointer';
                btn.classList.remove('wrong-answer');
            });
        }, 1000);
        return;
    }
}

function moveToNextQuestion() {
    // Play click sound
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
    
    const hasNext = questionsManager.nextQuestion();
    
    if (hasNext) {
        renderQuestion();
    } else {
        showQuizCompletion();
    }
}

function moveToPreviousQuestion() {
    // Play click sound
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
    
    questionsManager.previousQuestion();
    renderQuestion();
}

function showQuizCompletion() {
    const total = questionsManager.getTotalQuestions();
    const correct = questionsManager.correctAnswers;
    const percentage = Math.round((correct / total) * 100);
    
    const completionHTML = `
        <div class="quiz-completion">
            <div class="completion-content">
                <img src="images/achievements.png" alt="Achievement" style="max-width: 300px; margin-bottom: 30px;" onerror="this.style.display='none'">
                <h2 style="color: var(--accent-green); margin-bottom: 20px;">
                    ${percentage >= 70 ? '🎉 ممتاز!' : '💪 حاول مرة أخرى!'}
                </h2>
                <div class="score-display">
                    <p>لقد أجبت بشكل صحيح على</p>
                    <h1 style="color: var(--primary-color); font-size: 3rem; margin: 20px 0;">
                        ${correct} / ${total}
                    </h1>
                    <p>النسبة: <strong style="font-size: 1.5rem;">${percentage}%</strong></p>
                </div>
                <div class="completion-actions" style="margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="retryQuiz()">
                        🔄 إعادة المحاولة
                    </button>
                    <button class="btn btn-secondary" onclick="backToModules()">
                        🏠 العودة للموديولات
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('activitiesContent').innerHTML = completionHTML;
}

function retryQuiz() {
    questionsManager.reset();
    renderQuestion();
}

/* ====================================
   INITIALIZATION
   ==================================== */

function initializeQuestions() {
    questionsManager.reset();
    renderQuestion();
}