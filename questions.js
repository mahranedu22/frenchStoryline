/* ====================================
   QUESTIONS LOGIC - منطق الأسئلة
   ==================================== */

const questionsManager = {
    currentQuestionIndex: 0,
    currentExerciseIndex: 0,
    userAnswers: [],
    correctAnswers: 0,
    allExercises: [],
    
    // Initialize exercises
    init() {
        // Get exercises for current module
        const moduleExercises = exercisesData[currentModuleId];
        if (!moduleExercises) {
            console.error('No exercises found for module:', currentModuleId);
            return;
        }
        
        const exercises = currentLearningStyle === '111' ? 
            moduleExercises.visualHigh : moduleExercises.visualLow;
            
        this.allExercises = exercises;
        this.currentExerciseIndex = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.correctAnswers = 0;
    },
    
    // Get current exercise
    getCurrentExercise() {
        return this.allExercises[this.currentExerciseIndex];
    },
    
    // Get current question
    getCurrentQuestion() {
        const exercise = this.getCurrentExercise();
        return exercise.questions[this.currentQuestionIndex];
    },
    
    // Get total questions in current exercise
    getTotalQuestionsInExercise() {
        return this.getCurrentExercise().questions.length;
    },
    
    // Check if answer is correct
    checkAnswer(selectedAnswer) {
        const currentQ = this.getCurrentQuestion();
        const isCorrect = selectedAnswer === currentQ.correct || 
                         selectedAnswer === currentQ.correct.toString();
        
        if (isCorrect) {
            this.correctAnswers++;
        }
        
        return isCorrect;
    },
    
    // Move to next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.getTotalQuestionsInExercise() - 1) {
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
    
    // Move to next exercise
    nextExercise() {
        if (this.currentExerciseIndex < this.allExercises.length - 1) {
            this.currentExerciseIndex++;
            this.currentQuestionIndex = 0;
            return true;
        }
        return false;
    },
    
    // Check if all exercises completed
    isCompleted() {
        return this.currentExerciseIndex >= this.allExercises.length - 1 &&
               this.currentQuestionIndex >= this.getTotalQuestionsInExercise() - 1;
    },
    
    // Reset
    reset() {
        this.currentExerciseIndex = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.correctAnswers = 0;
    }
};

/* ====================================
   UI FUNCTIONS FOR QUESTIONS
   ==================================== */

function renderQuestion() {
    const exercise = questionsManager.getCurrentExercise();
    const question = questionsManager.getCurrentQuestion();
    const currentIndex = questionsManager.currentQuestionIndex;
    const totalQuestions = questionsManager.getTotalQuestionsInExercise();
    
    let questionHTML = '';
    
    // Render based on exercise type
    switch(exercise.type) {
        case 'mcq':
            questionHTML = renderMCQ(exercise, question, currentIndex, totalQuestions);
            break;
        case 'true_false':
            questionHTML = renderTrueFalse(exercise, question, currentIndex, totalQuestions);
            break;
        case 'fill_blank':
            questionHTML = renderFillBlank(exercise, question, currentIndex, totalQuestions);
            break;
        case 'drag_drop':
            questionHTML = renderDragDrop(exercise, question, currentIndex, totalQuestions);
            break;
    }
    
    document.getElementById('activitiesContent').innerHTML = questionHTML;
    
    // Setup drag and drop if needed
    if (exercise.type === 'drag_drop') {
        setupDragDrop();
    }
}

// Render MCQ Question
function renderMCQ(exercise, question, currentIndex, totalQuestions) {
    return `
        <div class="storyline-question-container">
            <div class="question-header-top">
                <div class="question-counter">السؤال ${currentIndex + 1} من ${totalQuestions}</div>
                <div class="question-character">
                    <img src="images/questionCharacter.png" alt="Character" onerror="this.style.display='none'">
                </div>
            </div>
            
            <div class="question-text-box">
                <p>${question.question}</p>
            </div>
            
            <div class="answer-options answer-options-mcq">
                ${question.options.map((option, index) => `
                    <button class="answer-btn answer-btn-mcq" onclick="handleAnswerClick('${option}', this)" data-option="${option}">
                        <span class="option-label">.${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>
            
            ${renderNavigationArrows(currentIndex)}
        </div>
    `;
}

// Render True/False Question
function renderTrueFalse(exercise, question, currentIndex, totalQuestions) {
    return `
        <div class="storyline-question-container">
            <div class="question-header-top">
                <div class="question-counter">السؤال ${currentIndex + 1} من ${totalQuestions}</div>
                <div class="question-character">
                    <img src="images/questionCharacter.png" alt="Character" onerror="this.style.display='none'">
                </div>
            </div>
            
            <div class="question-text-box">
                <p>${question.question}</p>
                <p style="font-size: 1.1rem; margin-top: 10px; color: var(--text-secondary);">${question.statement}</p>
            </div>
            
            <div class="true-false-options">
                <button class="tf-btn tf-true" onclick="handleAnswerClick('true', this)" data-option="true">
                    <img src="images/true.png" alt="صح" style="width: 80px; height: 80px;">
                    <span>صح</span>
                </button>
                <button class="tf-btn tf-false" onclick="handleAnswerClick('false', this)" data-option="false">
                    <img src="images/false.png" alt="خطأ" style="width: 80px; height: 80px;">
                    <span>خطأ</span>
                </button>
            </div>
            
            ${renderNavigationArrows(currentIndex)}
        </div>
    `;
}

// Render Fill in the Blank Question
function renderFillBlank(exercise, question, currentIndex, totalQuestions) {
    return `
        <div class="storyline-question-container">
            <div class="question-header-top">
                <div class="question-counter">السؤال ${currentIndex + 1} من ${totalQuestions}</div>
                <div class="question-character">
                    <img src="images/questionCharacter.png" alt="Character" onerror="this.style.display='none'">
                </div>
            </div>
            
            <div class="question-text-box">
                <h3 style="margin-bottom: 20px; color: var(--button-red);">${exercise.instruction || 'أكمل الفراغ'}</h3>
                <p style="font-size: 1.8rem; font-weight: bold;">${question.sentence}</p>
                ${question.hint ? `<p style="margin-top: 10px; color: var(--text-secondary);">${question.hint}</p>` : ''}
            </div>
            
            <div class="answer-options answer-options-mcq">
                ${question.options.map((option, index) => `
                    <button class="answer-btn answer-btn-mcq" onclick="handleAnswerClick('${option}', this)" data-option="${option}">
                        <span class="option-label">.${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>
            
            ${renderNavigationArrows(currentIndex)}
        </div>
    `;
}

// Render Drag and Drop Question
function renderDragDrop(exercise, question, currentIndex, totalQuestions) {
    return `
        <div class="storyline-question-container">
            <div class="question-header-top">
                <div class="question-counter">السؤال ${currentIndex + 1} من ${totalQuestions}</div>
                <div class="question-character">
                    <img src="images/questionCharacter.png" alt="Character" onerror="this.style.display='none'">
                </div>
            </div>
            
            <div class="question-text-box">
                <h3 style="color: var(--button-red);">${exercise.instruction}</h3>
            </div>
            
            <div class="drag-drop-area">
                <div class="drop-zone-sentence" id="dropZone">
                    ${question.correctOrder.map((_, index) => `
                        <div class="word-slot" data-index="${index}"></div>
                    `).join('')}
                </div>
                
                <div class="draggable-words" id="draggableWords">
                    ${question.words.map((word, index) => `
                        <div class="draggable-word" draggable="true" data-word="${word}" data-id="${index}">
                            ${word}
                        </div>
                    `).join('')}
                </div>
                
                <button class="btn btn-primary" onclick="checkDragDropAnswer()" style="margin-top: 20px;">
                    ✓ تحقق من الإجابة
                </button>
            </div>
            
            ${renderNavigationArrows(currentIndex)}
        </div>
    `;
}

// Render Navigation Arrows
function renderNavigationArrows(currentIndex) {
    return `
        <div class="question-navigation">
            <button class="nav-arrow prev-arrow" id="prevArrow" onclick="moveToPreviousQuestion()" 
                    style="display: ${currentIndex > 0 ? 'flex' : 'none'};">
                ▶
            </button>
            <button class="nav-arrow next-arrow" id="nextArrow" onclick="moveToNextQuestion()" style="display: none;">
                ◀
            </button>
        </div>
    `;
}

/* ====================================
   ANSWER HANDLING
   ==================================== */

function handleAnswerClick(selectedAnswer, buttonElement) {
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
    
    const allButtons = document.querySelectorAll('.answer-btn, .tf-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });
    
    const isCorrect = questionsManager.checkAnswer(selectedAnswer);
    
    if (isCorrect) {
        buttonElement.classList.add('correct-answer');
        
        if (!questionsManager.isCompleted()) {
            setTimeout(() => {
                const hasNext = questionsManager.nextQuestion();
                if (hasNext) {
                    renderQuestion();
                } else {
                    // Move to next exercise
                    const hasNextEx = questionsManager.nextExercise();
                    if (hasNextEx) {
                        renderQuestion();
                    } else {
                        showQuizCompletion();
                    }
                }
            }, 800);
        } else {
            setTimeout(() => showQuizCompletion(), 1000);
        }
    } else {
        buttonElement.classList.add('wrong-answer');
        
        setTimeout(() => {
            allButtons.forEach(btn => {
                btn.disabled = false;
                btn.style.cursor = 'pointer';
                btn.classList.remove('wrong-answer');
            });
        }, 1000);
    }
}

/* ====================================
   DRAG AND DROP
   ==================================== */

function setupDragDrop() {
    const draggables = document.querySelectorAll('.draggable-word');
    const slots = document.querySelectorAll('.word-slot');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', draggable.dataset.word);
            e.dataTransfer.setData('id', draggable.dataset.id);
            draggable.classList.add('dragging');
        });
        
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });
    
    slots.forEach(slot => {
        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
            slot.classList.add('drag-over');
        });
        
        slot.addEventListener('dragleave', () => {
            slot.classList.remove('drag-over');
        });
        
        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            slot.classList.remove('drag-over');
            
            const word = e.dataTransfer.getData('text/plain');
            const id = e.dataTransfer.getData('id');
            
            if (slot.textContent === '') {
                slot.textContent = word;
                slot.dataset.word = word;
                
                const draggable = document.querySelector(`[data-id="${id}"]`);
                if (draggable) draggable.style.display = 'none';
            }
        });
        
        slot.addEventListener('click', () => {
            if (slot.textContent !== '') {
                const word = slot.dataset.word;
                const draggables = document.querySelectorAll('.draggable-word');
                draggables.forEach(d => {
                    if (d.dataset.word === word) {
                        d.style.display = 'block';
                    }
                });
                slot.textContent = '';
                slot.dataset.word = '';
            }
        });
    });
}

function checkDragDropAnswer() {
    const question = questionsManager.getCurrentQuestion();
    const slots = document.querySelectorAll('.word-slot');
    let userAnswer = [];
    
    slots.forEach(slot => {
        userAnswer.push(slot.textContent.trim());
    });
    
    const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correctOrder);
    
    if (isCorrect) {
        questionsManager.correctAnswers++;
        slots.forEach(slot => {
            slot.style.backgroundColor = 'var(--correct-green)';
            slot.style.color = 'white';
        });
        
        setTimeout(() => {
            if (!questionsManager.isCompleted()) {
                const hasNext = questionsManager.nextQuestion();
                if (hasNext) {
                    renderQuestion();
                } else {
                    const hasNextEx = questionsManager.nextExercise();
                    if (hasNextEx) {
                        renderQuestion();
                    } else {
                        showQuizCompletion();
                    }
                }
            } else {
                showQuizCompletion();
            }
        }, 1000);
    } else {
        slots.forEach(slot => {
            slot.style.backgroundColor = 'var(--wrong-red)';
            slot.style.color = 'white';
        });
        
        setTimeout(() => {
            slots.forEach(slot => {
                slot.style.backgroundColor = '';
                slot.style.color = '';
            });
        }, 1000);
    }
}

/* ====================================
   NAVIGATION
   ==================================== */

function moveToNextQuestion() {
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
    
    const hasNext = questionsManager.nextQuestion();
    if (hasNext) {
        renderQuestion();
    } else {
        const hasNextEx = questionsManager.nextExercise();
        if (hasNextEx) {
            renderQuestion();
        } else {
            showQuizCompletion();
        }
    }
}

function moveToPreviousQuestion() {
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
    
    questionsManager.previousQuestion();
    renderQuestion();
}

function showQuizCompletion() {
    const completionHTML = `
        <div class="quiz-completion">
            <div class="completion-content">
                <img src="images/achievements.png" alt="Achievement" style="max-width: 300px; margin-bottom: 30px;" onerror="this.style.display='none'">
                <h2 style="color: var(--accent-green); margin-bottom: 20px;">
                    🎉 ممتاز! لقد أكملت جميع التمارين
                </h2>
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

function initializeQuestions() {
    questionsManager.init();
    renderQuestion();
}