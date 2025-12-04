// ========================================
// YALDA NIGHT 2025 - PROFESSIONAL JS
// ========================================

// Quiz Questions Database
const quizQuestions = [
    {
        q: "What does 'Yalda' mean in Syriac?",
        choices: ["Birth", "Light", "Night", "Fire"],
        correct: 0,
        explanation: "Yalda means 'birth' in Syriac, symbolizing the rebirth of the sun after the longest night.",
        funFact: "🌅 The name celebrates the literal birth of the new sun!"
    },
    {
        q: "Which Persian poet is traditionally used for fortune-telling (Faal)?",
        choices: ["Rumi", "Hafez", "Saadi", "Ferdowsi"],
        correct: 1,
        explanation: "Hafez (1315-1390) is the beloved poet whose mystical verses are used for divine guidance.",
        funFact: "📖 Hafez's Divan contains ~500 poems of love and wisdom!"
    },
    {
        q: "What fruit symbolizes the sun's rebirth on Yalda?",
        choices: ["Watermelon", "Pomegranate", "Apple", "Orange"],
        correct: 1,
        explanation: "The pomegranate's ruby-red seeds represent the sun's life-giving energy.",
        funFact: "🍇 Each pomegranate contains hundreds of seeds, symbolizing abundance!"
    },
    {
        q: "When is Yalda Night celebrated each year?",
        choices: ["December 20-21", "March 20-21", "September 22-23", "June 20-21"],
        correct: 0,
        explanation: "Yalda marks the winter solstice, the longest night of the year.",
        funFact: "🌙 After Yalda, days gradually become longer - hope returns!"
    },
    {
        q: "Which nut is traditionally eaten during Yalda celebrations?",
        choices: ["Cashew", "Pistachio", "Almond", "Walnut"],
        correct: 1,
        explanation: "Pistachios are a beloved Yalda tradition, representing prosperity.",
        funFact: "🥜 Iran produces over 50% of the world's pistachios!"
    },
    {
        q: "Approximately how many poems are in Hafez's Divan?",
        choices: ["~200", "~300", "~500", "~700"],
        correct: 2,
        explanation: "The Divan contains approximately 500 Ghazals (lyrical poems).",
        funFact: "📚 Each Ghazal explores universal themes of love and spirituality!"
    },
    {
        q: "What is the main spiritual purpose of staying awake on Yalda?",
        choices: ["Celebrate harvest", "Greet the returning sun", "Prepare for winter", "Light sacred fires"],
        correct: 1,
        explanation: "Families stay awake to witness and celebrate the sun's triumph over darkness.",
        funFact: "✨ The vigil represents hope conquering despair!"
    },
    {
        q: "In which city was Hafez born and buried?",
        choices: ["Isfahan", "Shiraz", "Tehran", "Tabriz"],
        correct: 1,
        explanation: "Hafez was born and lived in Shiraz, Iran.",
        funFact: "🏛️ His tomb in Shiraz is visited by millions of pilgrims!"
    },
    {
        q: "How old is the Yalda celebration tradition?",
        choices: ["1,000 years", "3,000 years", "5,000 years", "7,000+ years"],
        correct: 3,
        explanation: "Yalda dates back over 7,000 years to ancient Zoroastrian times.",
        funFact: "🕰️ One of humanity's oldest continuous celebrations!"
    },
    {
        q: "What does Yalda Night ultimately symbolize?",
        choices: ["End of year", "Light over darkness", "Winter's arrival", "Harvest time"],
        correct: 1,
        explanation: "Yalda celebrates the eternal triumph of light and hope over darkness.",
        funFact: "💫 A timeless metaphor for human resilience and renewal!"
    }
];

// ========================================
// FORTUNE WHEEL CLASS
// ========================================
class FortuneWheel {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Canvas element not found');
            return;
        }

        this.ctx = this.canvas.getContext('2d');
        this.poems = window.poems || [];
        this.segmentCount = this.poems.length || 100;
        
        // Wheel configuration
        this.centerX = 250;
        this.centerY = 250;
        this.radius = 230;
        this.rotation = 0;
        this.isSpinning = false;
        
        // Color palette
        this.colors = [
            '#c41e3a', '#d43f5a', '#8b0000', '#b22222',
            '#dc143c', '#ff1744', '#8b1a1a', '#a01535',
            '#cc1a40', '#9d0a2a', '#d41159', '#c72c48'
        ];
        
        this.init();
    }
    
    init() {
        this.spinBtn = document.getElementById('spinBtn');
        if (this.spinBtn) {
            this.spinBtn.addEventListener('click', () => this.spin());
        }
        this.draw();
    }
    
    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const anglePerSegment = (Math.PI * 2) / this.segmentCount;
        
        // Draw wheel segments
        for (let i = 0; i < this.segmentCount; i++) {
            const startAngle = i * anglePerSegment + this.rotation;
            const endAngle = startAngle + anglePerSegment;
            
            // Create segment
            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX, this.centerY);
            this.ctx.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle);
            this.ctx.closePath();
            
            // Fill segment
            this.ctx.fillStyle = this.colors[i % this.colors.length];
            this.ctx.fill();
            
            // Draw border
            this.ctx.strokeStyle = '#d4af37';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        // Draw center circle
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, 40, 0, Math.PI * 2);
        this.ctx.fillStyle = '#d4af37';
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#8b0000';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        
        // Draw center text
        this.ctx.fillStyle = '#8b0000';
        this.ctx.font = 'bold 18px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('حافظ', this.centerX, this.centerY);
    }
    
    spin() {
        if (this.isSpinning || !this.poems || this.poems.length === 0) return;
        
        this.isSpinning = true;
        this.spinBtn.disabled = true;
        this.spinBtn.textContent = 'SPINNING...';
        
        // Spin configuration
        const minSpins = 5;
        const maxSpins = 8;
        const totalSpins = minSpins + Math.random() * (maxSpins - minSpins);
        const targetRotation = this.rotation + (Math.PI * 2 * totalSpins);
        const duration = 4000; // 4 seconds
        const startTime = Date.now();
        const startRotation = this.rotation;
        
        // Animation loop
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Cubic ease-out for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            this.rotation = startRotation + (targetRotation - startRotation) * easeOut;
            
            this.draw();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                this.spinBtn.disabled = false;
                this.spinBtn.textContent = 'SPIN THE WHEEL';
                this.displayFortune();
            }
        };
        
        animate();
    }
    
    displayFortune() {
        if (!this.poems || this.poems.length === 0) return;
        
        // Calculate selected segment
        const normalizedRotation = this.rotation % (Math.PI * 2);
        const anglePerSegment = (Math.PI * 2) / this.segmentCount;
        const pointerAngle = Math.PI / 2; // Top of wheel (90 degrees)
        const adjustedRotation = (Math.PI * 2 - normalizedRotation + pointerAngle) % (Math.PI * 2);
        const selectedIndex = Math.floor(adjustedRotation / anglePerSegment) % this.segmentCount;
        const poem = this.poems[selectedIndex];
        
        // Display fortune
        const resultDiv = document.getElementById('fortuneResult');
        const textDiv = document.getElementById('fortuneText');
        
        if (resultDiv && textDiv && poem) {
            textDiv.innerHTML = `
                <p class="farsi-text">${poem.farsi}</p>
                <p class="english-text">${poem.english}</p>
                <span class="theme-badge">${poem.theme || 'Wisdom'}</span>
            `;
            
            // Smooth scroll to result
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// ========================================
// QUIZ GAME CLASS
// ========================================
class QuizGame {
    constructor() {
        this.questions = this.shuffleArray([...quizQuestions]);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.playerName = '';
        this.timeRemaining = 150; // 2.5 minutes
        this.timerInterval = null;
        
        this.elements = {
            startScreen: document.getElementById('quizStart'),
            gameScreen: document.getElementById('quizGame'),
            resultsScreen: document.getElementById('quizResults'),
            startBtn: document.getElementById('startQuizBtn'),
            nameInput: document.getElementById('playerName'),
            nextBtn: document.getElementById('nextBtn'),
            questionNum: document.getElementById('questionNum'),
            questionText: document.getElementById('questionText'),
            choicesContainer: document.getElementById('choicesContainer'),
            feedback: document.getElementById('feedback'),
            timer: document.getElementById('timer'),
            resultsContent: document.getElementById('resultsContent')
        };
        
        this.init();
    }
    
    init() {
        if (this.elements.startBtn) {
            this.elements.startBtn.addEventListener('click', () => this.startQuiz());
        }
        
        if (this.elements.nextBtn) {
            this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        
        if (this.elements.nameInput) {
            this.elements.nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.startQuiz();
            });
        }
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    startQuiz() {
        this.playerName = this.elements.nameInput.value.trim();
        
        if (!this.playerName) {
            this.elements.nameInput.focus();
            this.elements.nameInput.placeholder = 'Please enter your name!';
            this.elements.nameInput.style.borderColor = '#ef4444';
            return;
        }
        
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeRemaining = 150;
        
        // Show game screen
        this.elements.startScreen.classList.remove('active');
        this.elements.gameScreen.classList.add('active');
        
        // Start timer and show first question
        this.startTimer();
        this.showQuestion();
    }
    
    startTimer() {
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.endQuiz();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        
        if (this.elements.timer) {
            this.elements.timer.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Color coding
            if (this.timeRemaining <= 30) {
                this.elements.timer.style.color = '#ef4444';
            } else if (this.timeRemaining <= 60) {
                this.elements.timer.style.color = '#f59e0b';
            } else {
                this.elements.timer.style.color = '#ffffff';
            }
        }
    }
    
    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question number and text
        this.elements.questionNum.textContent = this.currentQuestionIndex + 1;
        this.elements.questionText.textContent = question.q;
        
        // Clear and populate choices
        this.elements.choicesContainer.innerHTML = '';
        
        question.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice;
            btn.addEventListener('click', () => this.selectAnswer(index));
            this.elements.choicesContainer.appendChild(btn);
        });
        
        // Hide feedback and next button
        this.elements.feedback.classList.remove('show', 'correct', 'incorrect');
        this.elements.nextBtn.classList.remove('show');
    }
    
    selectAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const buttons = this.elements.choicesContainer.querySelectorAll('.choice-btn');
        
        // Disable all buttons
        buttons.forEach(btn => btn.style.pointerEvents = 'none');
        
        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            this.score++;
            buttons[selectedIndex].classList.add('correct');
            this.elements.feedback.classList.add('show', 'correct');
            this.elements.feedback.innerHTML = `
                <div style="font-size: 1.2rem; font-weight: 700; margin-bottom: 12px; color: #22c55e;">
                    ✓ Correct!
                </div>
                <div style="margin-bottom: 12px; color: var(--text-secondary);">
                    ${question.explanation}
                </div>
                <div style="font-size: 0.95rem; color: var(--text-muted);">
                    ${question.funFact}
                </div>
            `;
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            buttons[question.correct].classList.add('correct');
            this.elements.feedback.classList.add('show', 'incorrect');
            this.elements.feedback.innerHTML = `
                <div style="font-size: 1.2rem; font-weight: 700; margin-bottom: 12px; color: #ef4444;">
                    ✗ Incorrect
                </div>
                <div style="margin-bottom: 12px; color: var(--text-secondary);">
                    ${question.explanation}
                </div>
                <div style="font-size: 0.95rem; color: var(--text-muted);">
                    ${question.funFact}
                </div>
            `;
        }
        
        // Show next button
        this.elements.nextBtn.classList.add('show');
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.endQuiz();
        }
    }
    
    endQuiz() {
        // Stop timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        // Hide game screen, show results
        this.elements.gameScreen.classList.remove('active');
        this.elements.resultsScreen.classList.add('active');
        
        // Calculate results
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const passed = this.score >= 8;
        
        // Generate results HTML
        this.elements.resultsContent.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 5rem; margin-bottom: 25px;">
                    ${passed ? '🏆' : '📚'}
                </div>
                <h2 style="font-size: 2.5rem; color: var(--accent-gold); margin-bottom: 20px;">
                    ${passed ? 'Congratulations, ' + this.playerName + '!' : 'Good Effort, ' + this.playerName + '!'}
                </h2>
                <div style="font-size: 4rem; font-weight: 700; color: var(--accent-gold); margin: 30px 0;">
                    ${this.score}/${this.questions.length}
                </div>
                <div style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 40px;">
                    ${percentage}% Correct
                </div>
                
                ${passed ? `
                    <div style="background: linear-gradient(135deg, var(--pomegranate), var(--pomegranate-dark)); 
                                padding: 40px; border-radius: 20px; margin: 30px 0; color: white;">
                        <div style="font-size: 2rem; font-weight: 700; margin-bottom: 15px;">
                            🎉 You Won!
                        </div>
                        <div style="font-size: 1.2rem;">
                            You've mastered Yalda Night knowledge!
                        </div>
                        <div style="margin-top: 20px; font-size: 0.95rem; opacity: 0.9;">
                            Your understanding of Persian culture is exceptional
                        </div>
                    </div>
                ` : `
                    <div style="background: rgba(212, 175, 55, 0.1); 
                                border: 2px solid rgba(212, 175, 55, 0.3);
                                padding: 40px; border-radius: 20px; margin: 30px 0;">
                        <div style="font-size: 1.5rem; margin-bottom: 15px; color: var(--text-primary);">
                            Keep learning about this beautiful tradition!
                        </div>
                        <div style="font-size: 1rem; color: var(--text-muted);">
                            You need 8 or more correct answers to win
                        </div>
                    </div>
                `}
                
                <button onclick="location.reload()" 
                        style="background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark));
                               color: var(--bg-primary); font-size: 1.1rem; font-weight: 700;
                               padding: 15px 40px; border-radius: 50px; cursor: pointer;
                               border: none; margin-top: 20px; transition: all 0.3s ease;"
                        onmouseover="this.style.transform='translateY(-3px)'"
                        onmouseout="this.style.transform='translateY(0)'">
                    🔄 Try Again
                </button>
            </div>
        `;
        
        // Save winner to local storage
        if (passed) {
            this.saveWinner();
        }
    }
    
    saveWinner() {
        try {
            const winners = JSON.parse(localStorage.getItem('yaldaWinners') || '[]');
            winners.push({
                name: this.playerName,
                score: this.score,
                percentage: Math.round((this.score / this.questions.length) * 100),
                date: new Date().toISOString()
            });
            
            // Keep only last 10 winners
            if (winners.length > 10) {
                winners.shift();
            }
            
            localStorage.setItem('yaldaWinners', JSON.stringify(winners));
        } catch (error) {
            console.error('Failed to save winner:', error);
        }
    }
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌙 Yalda Night Website - Initializing...');
    
    // Initialize Fortune Wheel
    const fortuneWheel = new FortuneWheel('fortuneWheel');
    
    // Initialize Quiz Game
    const quizGame = new QuizGame();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    console.log('✨ Yalda Night Website - Ready!');
    console.log(`📚 Loaded ${window.poems?.length || 0} Hafez poems`);
});
