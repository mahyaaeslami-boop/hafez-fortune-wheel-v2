// Modern Hafez Fortune Wheel - 2025

// Quiz Questions
const quizQuestions = [
    {
        q: "What does 'Yalda' mean?",
        choices: ["Birth", "Light", "Night", "Fire"],
        correct: 0,
        explanation: "Yalda means 'birth' in Syriac, symbolizing the rebirth of the sun",
        funFact: "🌅 This name represents the literal birth of the new sun after the longest night!"
    },
    {
        q: "Which Persian poet is used for Hafez Faal?",
        choices: ["Rumi", "Hafez", "Saadi", "Ferdowsi"],
        correct: 1,
        explanation: "Hafez (1315-1390) is the master poet used for fortune-telling",
        funFact: "📖 Hafez's Divan contains ~500 mystical poems used for guidance!"
    },
    {
        q: "What fruit symbolizes the sun on Yalda?",
        choices: ["Watermelon", "Pomegranate", "Apple", "Orange"],
        correct: 1,
        explanation: "The pomegranate's red seeds symbolize the sun's life force",
        funFact: "🍇 Pomegranate represents fertility and the sun's rebirth!"
    },
    {
        q: "When is Yalda Night celebrated?",
        choices: ["December 20-21", "March 20-21", "September 22-23", "June 20-21"],
        correct: 0,
        explanation: "Yalda marks the winter solstice, the longest night",
        funFact: "🌙 After this night, days start getting longer - symbolizing hope!"
    },
    {
        q: "Which nut is traditionally eaten during Yalda?",
        choices: ["Cashew", "Pistachio", "Almond", "Walnut"],
        correct: 1,
        explanation: "Pistachios are a beloved Yalda tradition",
        funFact: "🥜 Iran produces over 50% of the world's pistachios!"
    },
    {
        q: "How many poems does Hafez's Divan contain?",
        choices: ["~200", "~300", "~500", "~700"],
        correct: 2,
        explanation: "The Divan contains approximately 500 Ghazals",
        funFact: "📚 Each Ghazal speaks to universal truths about love and spirituality!"
    },
    {
        q: "What is the main purpose of staying awake on Yalda?",
        choices: ["Celebrate harvest", "Greet the new sun", "Prepare for winter", "Light fires"],
        correct: 1,
        explanation: "The vigil celebrates the triumph of light",
        funFact: "✨ Families stay awake sharing stories until dawn!"
    },
    {
        q: "Which city was Hafez born in?",
        choices: ["Isfahan", "Shiraz", "Tehran", "Tabriz"],
        correct: 1,
        explanation: "Hafez was born in Shiraz, Iran",
        funFact: "🏛️ Shiraz is still home to Hafez's tomb, visited by millions!"
    },
    {
        q: "How old is the Yalda celebration?",
        choices: ["1,000 years", "3,000 years", "5,000 years", "7,000+ years"],
        correct: 3,
        explanation: "Yalda dates back over 7,000 years to Zoroastrian times",
        funFact: "🕰️ One of humanity's oldest continuous celebrations!"
    },
    {
        q: "What does the longest night symbolize?",
        choices: ["End of year", "Light over darkness", "Winter's arrival", "Harvest time"],
        correct: 1,
        explanation: "Yalda celebrates the triumph of light over darkness",
        funFact: "💫 A metaphor for hope conquering despair!"
    }
];

// Fortune Wheel Class
class FortuneWheel {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Canvas not found');
            return;
        }

        this.ctx = this.canvas.getContext('2d');
        this.poems = window.poems || [];
        this.segments = this.poems.length || 100;
        
        // Wheel properties
        this.centerX = 250;
        this.centerY = 250;
        this.radius = 230;
        this.rotation = 0;
        this.spinning = false;
        
        // Colors
        this.colors = [
            '#c41e3a', '#d43f5a', '#8b0000', '#b22222',
            '#dc143c', '#ff1744', '#8b1a1a', '#a01535',
            '#cc1a40', '#9d0a2a', '#d41159', '#c72c48'
        ];
        
        this.spinBtn = document.getElementById('spinBtn');
        this.setupEvents();
        this.draw();
    }
    
    setupEvents() {
        if (this.spinBtn) {
            this.spinBtn.addEventListener('click', () => this.spin());
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 500, 500);
        
        const anglePerSegment = (Math.PI * 2) / this.segments;
        
        // Draw segments
        for (let i = 0; i < this.segments; i++) {
            const startAngle = i * anglePerSegment + this.rotation;
            const endAngle = startAngle + anglePerSegment;
            
            // Segment
            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX, this.centerY);
            this.ctx.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle);
            this.ctx.closePath();
            
            this.ctx.fillStyle = this.colors[i % this.colors.length];
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#d4af37';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        // Center circle
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, 35, 0, Math.PI * 2);
        this.ctx.fillStyle = '#d4af37';
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#8b0000';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        
        // Center text
        this.ctx.fillStyle = '#8b0000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('حافظ', this.centerX, this.centerY);
    }
    
    spin() {
        if (this.spinning) return;
        
        this.spinning = true;
        this.spinBtn.disabled = true;
        
        const spins = 5 + Math.random() * 3;
        const targetRotation = this.rotation + (Math.PI * 2 * spins);
        const duration = 3000;
        const startTime = Date.now();
        const startRotation = this.rotation;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing
            const easeOut = 1 - Math.pow(1 - progress, 3);
            this.rotation = startRotation + (targetRotation - startRotation) * easeOut;
            
            this.draw();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.spinning = false;
                this.spinBtn.disabled = false;
                this.showFortune();
            }
        };
        
        animate();
    }
    
    showFortune() {
        if (!this.poems || this.poems.length === 0) return;
        
        const normalizedRotation = this.rotation % (Math.PI * 2);
        const anglePerSegment = (Math.PI * 2) / this.segments;
        const selectedIndex = Math.floor((Math.PI * 2 - normalizedRotation) / anglePerSegment) % this.segments;
        const poem = this.poems[selectedIndex];
        
        const resultDiv = document.getElementById('fortuneResult');
        const textDiv = document.getElementById('fortuneText');
        
        if (resultDiv && textDiv && poem) {
            textDiv.innerHTML = `
                <p class="farsi-text">${poem.farsi}</p>
                <p class="english-text">${poem.english}</p>
                <span class="theme-badge">${poem.theme}</span>
            `;
            
            resultDiv.style.animation = 'fadeIn 0.6s ease-out';
        }
    }
}

// Quiz Game Class
class QuizGame {
    constructor() {
        this.questions = quizQuestions;
        this.currentQuestion = 0;
        this.score = 0;
        this.playerName = '';
        this.timeLeft = 150; // 2.5 minutes
        this.timer = null;
        
        this.startScreen = document.getElementById('quizStart');
        this.gameScreen = document.getElementById('quizGame');
        this.resultsScreen = document.getElementById('quizResults');
        this.startBtn = document.getElementById('startQuizBtn');
        this.nameInput = document.getElementById('playerName');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.setupEvents();
    }
    
    setupEvents() {
        if (this.startBtn) {
            this.startBtn.addEventListener('click', () => this.start());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextQuestion());
        }
    }
    
    start() {
        this.playerName = this.nameInput.value.trim();
        if (!this.playerName) {
            alert('Please enter your name!');
            return;
        }
        
        this.startScreen.classList.remove('active');
        this.gameScreen.classList.add('active');
        
        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 150;
        
        this.startTimer();
        this.showQuestion();
    }
    
    startTimer() {
        this.updateTimer();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.endQuiz();
            }
        }, 1000);
    }
    
    updateTimer() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const timerEl = document.getElementById('timer');
        if (timerEl) {
            timerEl.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
            if (this.timeLeft < 30) {
                timerEl.style.color = '#ef4444';
            }
        }
    }
    
    showQuestion() {
        const q = this.questions[this.currentQuestion];
        
        document.getElementById('questionNum').textContent = this.currentQuestion + 1;
        document.getElementById('questionText').textContent = q.q;
        
        const choicesContainer = document.getElementById('choicesContainer');
        choicesContainer.innerHTML = '';
        
        q.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice;
            btn.addEventListener('click', () => this.selectAnswer(index));
            choicesContainer.appendChild(btn);
        });
        
        document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
        this.nextBtn.classList.remove('show');
    }
    
    selectAnswer(index) {
        const q = this.questions[this.currentQuestion];
        const buttons = document.querySelectorAll('.choice-btn');
        const feedback = document.getElementById('feedback');
        
        buttons.forEach(btn => btn.style.pointerEvents = 'none');
        
        if (index === q.correct) {
            this.score++;
            buttons[index].classList.add('correct');
            feedback.className = 'feedback show correct';
            feedback.innerHTML = `
                <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 10px;">✓ Correct!</div>
                <div style="margin-bottom: 10px;">${q.explanation}</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">${q.funFact}</div>
            `;
        } else {
            buttons[index].classList.add('incorrect');
            buttons[q.correct].classList.add('correct');
            feedback.className = 'feedback show incorrect';
            feedback.innerHTML = `
                <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 10px;">✗ Incorrect</div>
                <div style="margin-bottom: 10px;">${q.explanation}</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">${q.funFact}</div>
            `;
        }
        
        this.nextBtn.classList.add('show');
    }
    
    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion < this.questions.length) {
            this.showQuestion();
        } else {
            this.endQuiz();
        }
    }
    
    endQuiz() {
        clearInterval(this.timer);
        
        this.gameScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const passed = this.score >= 8;
        
        const resultsHTML = `
            <div style="background: var(--glass); border: 1px solid var(--glass-border); border-radius: 20px; padding: 60px 40px; backdrop-filter: blur(10px); text-align: center;">
                <div style="font-size: 5rem; margin-bottom: 20px;">${passed ? '🏆' : '📖'}</div>
                <h2 style="font-size: 2.5rem; color: var(--accent); margin-bottom: 20px;">
                    ${passed ? 'Congratulations!' : 'Good Try!'}
                </h2>
                <p style="font-size: 1.5rem; margin-bottom: 30px; color: var(--text-light);">
                    ${this.playerName}, you scored:
                </p>
                <div style="font-size: 4rem; font-weight: 700; color: var(--accent); margin-bottom: 30px;">
                    ${this.score}/${this.questions.length}
                </div>
                <div style="font-size: 1.3rem; margin-bottom: 40px; color: var(--text-muted);">
                    ${percentage}% Correct
                </div>
                ${passed ? `
                    <div style="background: linear-gradient(135deg, var(--pomegranate), var(--pomegranate-dark)); color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                        <div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 15px;">🎉 You Won!</div>
                        <div>You've mastered Yalda Night knowledge!</div>
                    </div>
                ` : `
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                        <div style="font-size: 1.2rem; margin-bottom: 10px;">Keep learning about this beautiful tradition!</div>
                        <div style="font-size: 0.95rem; color: var(--text-muted);">You need 8+ correct to win</div>
                    </div>
                `}
                <button onclick="location.reload()" class="cta-primary">Try Again</button>
            </div>
        `;
        
        document.getElementById('resultsContent').innerHTML = resultsHTML;
        
        // Store winner
        if (passed) {
            this.storeWinner();
        }
    }
    
    storeWinner() {
        const winners = JSON.parse(localStorage.getItem('yaldaWinners') || '[]');
        winners.push({
            name: this.playerName,
            score: this.score,
            percentage: Math.round((this.score / this.questions.length) * 100),
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('yaldaWinners', JSON.stringify(winners));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌙 Yalda Night Website Loaded');
    
    // Initialize Fortune Wheel
    const wheel = new FortuneWheel('fortuneWheel');
    
    // Initialize Quiz
    const quiz = new QuizGame();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    console.log('✨ All systems ready!');
});
