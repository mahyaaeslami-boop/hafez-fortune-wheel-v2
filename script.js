/* Hafez Fortune Wheel & Yalda Night Trivia - Enhanced */

// Yalda & Persian Trivia Questions with Educational Context
const triviaQuestions = [
    {
        question: "What does 'Yalda' mean?",
        choices: ["Birth", "Light", "Night", "Fire"],
        correct: 0,
        explanation: "Yalda means 'birth' in Aramaic, symbolizing the rebirth of the sun after the longest night.",
        funFact: "🌅 Did you know? In Persian tradition, Yalda Night represents the literal birth of the new sun and the triumph of light over darkness. This concept dates back to Zoroastrian beliefs over 7,000 years ago!"
    },
    {
        question: "Which Persian poet's work is traditionally used for Hafez Faal?",
        choices: ["Rumi", "Hafez", "Saadi", "Ferdowsi"],
        correct: 1,
        explanation: "Hafez (1315-1390) is the master of the Faal tradition, with his Divan containing ~500 mystical ghazals.",
        funFact: "📖 Did you know? Hafez's poetry has been used for divination for over 600 years. Even the famous German poet Goethe was fascinated by Hafez's work and called him 'divine'!"
    },
    {
        question: "What fruit symbolizes the sun on Yalda Night?",
        choices: ["Watermelon", "Pomegranate", "Apple", "Orange"],
        correct: 1,
        explanation: "The pomegranate's red seeds symbolize the sun and the life force of rebirth during Yalda.",
        funFact: "🍇 Did you know? Pomegranate symbolizes abundance and fertility in Persian culture. Its ruby-red seeds represent the sun's life-giving energy. Breaking open a pomegranate on Yalda is a blessing ritual!"
    },
    {
        question: "On which date does Yalda Night occur?",
        choices: ["December 20-21", "March 20-21", "September 22-23", "June 20-21"],
        correct: 0,
        explanation: "Yalda marks the winter solstice, the longest night of the year, around December 20-21.",
        funFact: "🌙 Did you know? December 21st is the winter solstice—the longest night of the year. After this night, days start getting longer again, symbolizing hope and renewal!"
    },
    {
        question: "Which nut is traditionally eaten during Yalda Night?",
        choices: ["Cashew", "Pistachio", "Almond", "Walnut"],
        correct: 1,
        explanation: "Pistachios are a classic and beloved treat during Yalda celebrations in Persian culture.",
        funFact: "🥜 Did you know? Pistachios come from Iran, which produces over 50% of the world's pistachios! They symbolize health and abundance in Persian culture and are a must-have during Yalda celebrations."
    },
    {
        question: "How many Ghazals (poems) does Hafez's Divan contain?",
        choices: ["Around 200", "Around 300", "Around 500", "Around 700"],
        correct: 2,
        explanation: "The Divan of Hafez contains approximately 500 lyrical poems called Ghazals.",
        funFact: "📚 Did you know? Each Ghazal is a self-contained poem that can be read independently, yet they all speak to universal truths about love, spirituality, and the human journey!"
    },
    {
        question: "What is the main purpose of staying awake on Yalda Night?",
        choices: ["To celebrate the harvest", "To greet the new sun at dawn", "To prepare for winter", "To light fires"],
        correct: 1,
        explanation: "The vigil through the longest night celebrates the triumph of light and waiting for the sun's return.",
        funFact: "✨ Did you know? Families stay awake through the entire night, sharing stories, poetry, and food. This tradition is called 'Shab Chardah'—watching through the night until the sun rises at dawn!"
    },
    {
        question: "Which city was Hafez born in?",
        choices: ["Isfahan", "Shiraz", "Tehran", "Tabriz"],
        correct: 1,
        explanation: "Hafez was born in Shiraz, Iran, one of the great centers of Persian culture and poetry.",
        funFact: "🏛️ Did you know? Shiraz was the capital of Persian empires and home to many great poets and philosophers. Hafez's tomb in Shiraz is still visited by millions seeking wisdom and blessing!"
    },
    {
        question: "What is 'Sofreh Yalda'?",
        choices: ["A prayer", "A ceremonial spread of fruits and nuts", "A song", "A ritual fire"],
        correct: 1,
        explanation: "Sofreh Yalda is the sacred table spread with fruits, nuts, and sweets for the celebration.",
        funFact: "🍱 Did you know? The Sofreh Yalda includes pomegranates, watermelons, dried fruits, nuts, honey, and wheat sprouts. Each item symbolizes different blessings: health, prosperity, abundance, and rebirth!"
    },
    {
        question: "Which element represents the eternal light on Yalda Night?",
        choices: ["Stars", "Candles and Fire", "Pomegranate juice", "Gold coins"],
        correct: 1,
        explanation: "Candles and fire symbolize the eternal light and the sun's triumph over darkness.",
        funFact: "🕯️ Did you know? In ancient Zoroastrianism, fire is sacred and represents divine light and truth. Lighting candles during Yalda Night symbolizes the eternal struggle between good and evil, light and darkness!"
    }
];
        choices: ["Stars", "Candles and Fire", "Pomegranate juice", "Gold coins"],
        correct: 1,
        explanation: "Candles and fire symbolize the eternal light and the sun's triumph over darkness."
    }
];

// Trivia Game Class with Timer & Winner Tracking
class TriviaGame {
    constructor(containerId, questionId, choicesId, feedbackId, nextBtnId) {
        this.container = document.getElementById(containerId);
        this.questionEl = document.getElementById(questionId);
        this.choicesEl = document.getElementById(choicesId);
        this.feedbackEl = document.getElementById(feedbackId);
        this.nextBtn = document.getElementById(nextBtnId);
        
        this.quizIntro = document.getElementById('quiz-intro');
        this.quizGame = document.getElementById('quiz-game');
        this.quizResults = document.getElementById('quiz-results');
        this.playerNameInput = document.getElementById('playerName');
        this.quizStartBtn = document.getElementById('quiz-start-btn');
        this.quizRestartBtn = document.getElementById('quiz-restart-btn');
        
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = false;
        this.totalQuestions = triviaQuestions.length;
        this.timePerQuestion = 15; // 15 seconds per question
        this.totalTime = this.totalQuestions * this.timePerQuestion;
        this.timeRemaining = this.totalTime;
        this.timerInterval = null;
        this.gameActive = false;
        this.playerName = '';
        
        this.setupEventListeners();
        this.showIntro();
    }
    
    setupEventListeners() {
        this.quizStartBtn.addEventListener('click', () => this.startQuiz());
        this.quizRestartBtn.addEventListener('click', () => this.restart());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startQuiz();
        });
    }
    
    showIntro() {
        this.quizIntro.style.display = 'flex';
        this.quizGame.style.display = 'none';
        this.quizResults.style.display = 'none';
        this.playerNameInput.value = '';
        this.playerNameInput.focus();
    }
    
    startQuiz() {
        this.playerName = this.playerNameInput.value.trim();
        
        if (!this.playerName) {
            alert('Please enter your name to begin!');
            return;
        }
        
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = false;
        this.gameActive = true;
        this.timeRemaining = this.totalTime;
        
        this.quizIntro.style.display = 'none';
        this.quizGame.style.display = 'block';
        this.quizResults.style.display = 'none';
        
        this.shuffleQuestions();
        this.startTimer();
        this.render();
    }
    
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endGame();
            } else if (this.timeRemaining <= 5 && !this.answered) {
                // Auto-answer with warning
                this.choicesEl.style.opacity = '0.6';
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Create or update timer display
        let timerDisplay = document.getElementById('trivia-timer');
        if (!timerDisplay) {
            timerDisplay = document.createElement('div');
            timerDisplay.id = 'trivia-timer';
            timerDisplay.className = 'trivia-timer';
            this.container.insertBefore(timerDisplay, this.container.firstChild);
        }
        
        timerDisplay.textContent = `⏱️ Time: ${timeStr}`;
        
        // Change color when time is running out
        if (this.timeRemaining <= 5) {
            timerDisplay.style.color = '#ff6b9d';
            timerDisplay.style.textShadow = '0 0 15px rgba(255, 107, 157, 0.6)';
        } else if (this.timeRemaining <= 10) {
            timerDisplay.style.color = '#d4af37';
            timerDisplay.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.4)';
        }
    }
    
    shuffleQuestions() {
        this.questions = [...triviaQuestions].sort(() => Math.random() - 0.5);
    }
    
    render() {
        if (this.currentQuestion >= this.totalQuestions) {
            this.showResults();
            return;
        }
        
        const q = this.questions[this.currentQuestion];
        this.questionEl.textContent = q.question;
        
        // Update progress
        const progressEl = document.getElementById('quiz-current');
        if (progressEl) progressEl.textContent = this.currentQuestion + 1;
        
        this.choicesEl.innerHTML = '';
        this.feedbackEl.innerHTML = '';
        this.nextBtn.style.display = 'none';
        this.nextBtn.disabled = false;
        this.answered = false;
        
        q.choices.forEach((choice, idx) => {
            const btn = document.createElement('button');
            btn.className = 'trivia-choice';
            btn.textContent = choice;
            btn.onclick = () => this.selectAnswer(idx, q);
            this.choicesEl.appendChild(btn);
        });
    }
    
    selectAnswer(selectedIdx, question) {
        if (this.answered || !this.gameActive) return;
        
        this.answered = true;
        const buttons = this.choicesEl.querySelectorAll('.trivia-choice');
        
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === question.correct) {
                btn.classList.add('correct');
            } else if (idx === selectedIdx && idx !== question.correct) {
                btn.classList.add('incorrect');
            }
        });
        
        if (selectedIdx === question.correct) {
            this.score++;
            this.feedbackEl.innerHTML = `
                <span class="trivia-correct">✓ Correct!</span>
                <span class="trivia-explanation">💡 ${question.explanation}</span>
                <span class="trivia-fun-fact">${question.funFact}</span>
            `;
        } else {
            this.feedbackEl.innerHTML = `
                <span class="trivia-incorrect">✗ Incorrect</span>
                <span class="trivia-explanation">💡 ${question.explanation}</span>
                <span class="trivia-fun-fact">${question.funFact}</span>
            `;
        }
        
        this.choicesEl.style.opacity = '1';
        this.nextBtn.style.display = 'inline-block';
    }
    
    nextQuestion() {
        this.currentQuestion++;
        this.answered = false;
        this.choicesEl.style.opacity = '1';
        this.nextBtn.style.display = 'none';
        this.render();
    }
    
    endGame() {
        this.gameActive = false;
        clearInterval(this.timerInterval);
        this.showResults();
    }
    
    showResults() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.gameActive = false;
        
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        let message = '';
        let emoji = '';
        let isWinner = this.score >= 8; // 8+ correct answers = winner
        
        if (percentage === 100) {
            message = 'PERFECT! 🎉 You are a true master of Yalda wisdom!';
            emoji = '👑';
        } else if (percentage >= 80) {
            message = 'EXCELLENT! 🌟 You have deep knowledge of Persian traditions!';
            emoji = '⭐';
        } else if (percentage >= 60) {
            message = 'GOOD! 🌙 You know quite a bit about Yalda Night!';
            emoji = '✨';
        } else if (percentage >= 40) {
            message = 'Nice effort! 📚 There\'s always more to learn about Yalda!';
            emoji = '📖';
        } else {
            message = 'Keep exploring! 🌙 The beauty of Yalda traditions awaits you!';
            emoji = '🌙';
        }
        
        // Hide quiz game and show results
        this.quizGame.style.display = 'none';
        this.quizResults.style.display = 'flex';
        
        // Update results screen
        const resultsTitle = document.getElementById('results-title');
        const scoreDisplay = document.getElementById('score-display');
        const playerNameDisplay = document.getElementById('player-name-display');
        const resultsMessage = document.getElementById('results-message');
        const resultsPrize = document.getElementById('results-prize');
        
        resultsTitle.textContent = isWinner ? '🏆 CONGRATULATIONS! YOU WON! 🏆' : 'Quiz Complete!';
        scoreDisplay.textContent = `${this.score}/10 (${percentage}%)`;
        playerNameDisplay.textContent = `🎭 ${this.playerName}`;
        resultsMessage.innerHTML = `${emoji} ${message}`;
        
        if (isWinner) {
            resultsPrize.style.display = 'block';
            resultsPrize.innerHTML = `
                🎁 <strong>PRIZE WINNER!</strong> 🎁<br>
                You've secured your place on the Yalda Challenge Leaderboard!<br>
                Your name will be announced as a winner!
            `;
            
            // Show certificate
            showCertificate(this.playerName, this.score, percentage);
            
            // Trigger confetti celebration
            this.triggerConfetti();
            this.playWinnerSound();
            
            // Submit winner to server
            this.submitWinner();
        } else {
            resultsPrize.style.display = 'none';
        }
    }
    
    triggerConfetti() {
        // Create confetti elements
        const confettiCount = 50;
        const confettiContainer = document.body;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.delay = Math.random() * 0.3 + 's';
            confetti.textContent = ['🍇', '🌙', '✨', '🎉', '👑', '⭐', '🏆', '🎁'][Math.floor(Math.random() * 8)];
            confettiContainer.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => confetti.remove(), 3000);
        }
    }
    
    playWinnerSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [800, 1000, 1200, 1400];
            
            notes.forEach((freq, idx) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.frequency.value = freq;
                osc.type = 'sine';
                gain.gain.setValueAtTime(0.1, audioContext.currentTime + idx * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + idx * 0.15 + 0.2);
                
                osc.start(audioContext.currentTime + idx * 0.15);
                osc.stop(audioContext.currentTime + idx * 0.15 + 0.2);
            });
        } catch (e) {
            // Sound not supported
        }
    }
    
    submitWinner() {
        // Send winner data to server
        const winnerData = {
            name: this.playerName,
            score: this.score,
            percentage: Math.round((this.score / this.totalQuestions) * 100),
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };
        
        // Log to console (for development)
        console.log('🏆 Winner Data:', winnerData);
        
        // Try to send to server (replace with your actual endpoint)
        fetch('/.netlify/functions/submit-winner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(winnerData)
        }).catch(err => {
            console.log('Local submission logged. Server integration can be added later.');
            // Store locally if server is not available
            this.storeWinnerLocally(winnerData);
        });
    }
    
    storeWinnerLocally(winnerData) {
        // Store in browser's localStorage for demonstration
        let winners = JSON.parse(localStorage.getItem('yaldaWinners') || '[]');
        winners.push(winnerData);
        localStorage.setItem('yaldaWinners', JSON.stringify(winners));
        
        // Also update live scoreboard data
        this.updateLiveScoreboard();
    }
    
    updateLiveScoreboard() {
        // Broadcast event for live scoreboard updates
        window.dispatchEvent(new CustomEvent('winnerAdded'));
    }
    
    restart() {
        this.showIntro();
    }
}

// Yalda Night themed icons for wheel
const YALDA_ICONS = [
    { symbol: '🌙', rotation: 0 },
    { symbol: '🍇', rotation: 15 },
    { symbol: '🕯️', rotation: 0 },
    { symbol: '🍎', rotation: 0 },
    { symbol: '❤️', rotation: 0 },
    { symbol: '⭐', rotation: 0 },
    { symbol: '🌟', rotation: 0 },
    { symbol: '💫', rotation: 0 },
    { symbol: '✨', rotation: 0 },
    { symbol: '🔥', rotation: 0 },
    { symbol: '🌾', rotation: 0 },
    { symbol: '🥜', rotation: 0 }
];

class FortuneWheel {
    constructor(canvasId, spellText = false) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.segments = poems.length;
        this.currentRotation = 0;
        this.isSpinning = false;
        this.spinButton = document.getElementById('spinButton');
        
        this.setupCanvas();
        this.drawWheel();
        this.attachEventListeners();
    }

    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
        
        this.centerX = rect.width / 2;
        this.centerY = rect.height / 2;
        this.radius = Math.min(rect.width, rect.height) / 2 - 10;
    }

    drawWheel() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const segmentAngle = (Math.PI * 2) / this.segments;
        const colors = this.generateColors();


        for (let i = 0; i < this.segments; i++) {
            const startAngle = i * segmentAngle + this.currentRotation;
            const endAngle = startAngle + segmentAngle;

            // Draw segment
            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX, this.centerY);
            this.ctx.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle);
            this.ctx.closePath();
            this.ctx.fillStyle = colors[i % colors.length];
            this.ctx.fill();

            // Draw border with gradient effect
            this.ctx.strokeStyle = '#d4af37';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Draw text
            this.drawSegmentText(i, startAngle, endAngle, segmentAngle);
        }

        // Draw center circle
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, 35, 0, Math.PI * 2);
        this.ctx.fillStyle = '#d4af37';
        this.ctx.fill();
        this.ctx.strokeStyle = '#8b0000';
        this.ctx.lineWidth = 4;
        this.ctx.stroke();

        // Draw center decoration
        this.ctx.fillStyle = '#8b0000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('HAFEZ', this.centerX, this.centerY);
    }

    generateColors() {
        return [
            '#c41e3a',
            '#8b0000',
            '#dc143c',
            '#8b1a1a',
            '#b22222',
            '#900000',
            '#d41159',
            '#a01535',
            '#c41e3a',
            '#7a0a0a',
        ];
    }

    drawSegmentText(segmentIndex, startAngle, endAngle, segmentAngle) {
        // Numbers removed - wheel segments now display no text
    }

    spin() {
        if (this.isSpinning) return;

        this.isSpinning = true;
        this.spinButton.disabled = true;

        const randomSegment = Math.floor(Math.random() * this.segments);
        const segmentAngle = (Math.PI * 2) / this.segments;
        const targetRotation = Math.PI * 2 * 5 + (randomSegment * segmentAngle);

        this.animateSpin(targetRotation, randomSegment);
    }

    animateSpin(targetRotation, selectedSegment) {
        const duration = 3500; // 3.5 seconds
        const startRotation = this.currentRotation;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out cubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            this.currentRotation = startRotation + (targetRotation - startRotation) * easeProgress;
            this.drawWheel();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                this.spinButton.disabled = false;
                this.displayFortune(selectedSegment);
                this.playSound();
            }
        };

        animate();
    }

    displayFortune(segmentIndex) {
        const fortune = poems[segmentIndex];
        const fortuneIcon = document.getElementById('fortuneIcon');
        const fortuneText = document.getElementById('fortuneText');
        const fortuneTranslation = document.getElementById('fortuneTranslation');
        const fortuneTheme = document.getElementById('fortuneTheme');

        // Get random Yalda icon
        const randomIcon = YALDA_ICONS[Math.floor(Math.random() * YALDA_ICONS.length)];
        fortuneIcon.innerHTML = `<span class="yalda-icon">${randomIcon.symbol}</span>`;
        
        fortuneText.textContent = fortune.farsi;
        fortuneTheme.innerHTML = `
            <div style="margin-top: 10px;">
                <strong style="color: var(--accent-gold);">Theme:</strong> ${fortune.theme}
            </div>
            <div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-muted);">
                <strong>📖 About this verse:</strong> This poem from Hafez speaks to universal truths about the human experience, 
                offering guidance through mystical wisdom. Reflect on how these words might speak to your current journey.
            </div>
        `;
        
        fortuneTranslation.innerHTML = `
            <div style="margin-bottom: 15px;">
                <strong style="color: var(--accent-light-gold);">✨ English Translation:</strong><br>
                <em>${fortune.english}</em>
            </div>
            <div style="padding: 10px; background: rgba(212, 175, 55, 0.1); border-left: 3px solid var(--accent-gold); border-radius: 5px; font-size: 0.9rem;">
                <strong style="color: var(--accent-gold);">💭 Reflect:</strong> How does this message relate to your question or life situation? 
                Hafez's wisdom often reveals itself through personal interpretation.
            </div>
        `;

        // Add animation
        const card = document.getElementById('fortuneCard');
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.6s ease-in-out';
        }, 10);
    }

    playSound() {
        // Create a pleasant chime sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // First note
            const osc1 = audioContext.createOscillator();
            const gain1 = audioContext.createGain();
            osc1.connect(gain1);
            gain1.connect(audioContext.destination);
            
            osc1.frequency.value = 800;
            osc1.type = 'sine';
            gain1.gain.setValueAtTime(0.2, audioContext.currentTime);
            gain1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            osc1.start(audioContext.currentTime);
            osc1.stop(audioContext.currentTime + 0.3);
            
            // Second note
            const osc2 = audioContext.createOscillator();
            const gain2 = audioContext.createGain();
            osc2.connect(gain2);
            gain2.connect(audioContext.destination);
            
            osc2.frequency.value = 1000;
            osc2.type = 'sine';
            gain2.gain.setValueAtTime(0.15, audioContext.currentTime + 0.15);
            gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.45);
            
            osc2.start(audioContext.currentTime + 0.15);
            osc2.stop(audioContext.currentTime + 0.45);
        } catch (e) {
            // Sound not supported, silently fail
        }
    }

    attachEventListeners() {
        this.spinButton.addEventListener('click', () => this.spin());
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        this.setupCanvas();
        this.drawWheel();
    }
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95) rotateY(20deg);
        }
        to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Fortune Wheel
    const wheel = new FortuneWheel('wheelCanvas');
    
    // Initialize Trivia Game
    const trivia = new TriviaGame(
        'trivia-container',
        'trivia-question',
        'trivia-choices',
        'trivia-feedback',
        'trivia-next-btn'
    );
    
    // Initialize Live Scoreboard
    initializeLiveScoreboard();
    
    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Live Scoreboard Management
function initializeLiveScoreboard() {
    displayRecentWinners();
    
    // Listen for winner updates
    window.addEventListener('winnerAdded', () => {
        displayRecentWinners();
    });
    
    // Auto-refresh every 10 seconds
    setInterval(() => {
        displayRecentWinners();
    }, 10000);
}

function displayRecentWinners() {
    const winners = JSON.parse(localStorage.getItem('yaldaWinners') || '[]');
    const scoreboard = document.getElementById('scoreboard');
    const winnersList = document.getElementById('recent-winners-list');
    
    if (winners.length === 0) {
        scoreboard.style.display = 'none';
        return;
    }
    
    scoreboard.style.display = 'block';
    
    // Sort by score (highest first) and get top 5
    const topWinners = winners
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    
    winnersList.innerHTML = topWinners.map((winner, idx) => `
        <div class="winner-item">
            <div class="winner-info">
                <div class="winner-name">#${idx + 1} - ${winner.name}</div>
                <small style="color: var(--text-muted);">${new Date(winner.timestamp).toLocaleTimeString()}</small>
            </div>
            <div class="winner-score">${winner.score}/10</div>
        </div>
    `).join('');
}

// Certificate Display Function
function showCertificate(playerName, score, percentage) {
    const certificate = document.getElementById('certificate');
    const certWinnerName = document.getElementById('cert-winner-name');
    const certScoreText = document.getElementById('cert-score-text');
    
    if (certificate && score >= 8) {
        certWinnerName.textContent = playerName;
        certScoreText.textContent = `Achieved a Score of ${score}/10 (${percentage}%)`;
        certificate.style.display = 'block';
    }
}

