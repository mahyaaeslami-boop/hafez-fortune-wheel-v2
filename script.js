/* Hafez Fortune Wheel & Yalda Night Trivia - Enhanced */

// Yalda & Persian Trivia Questions
const triviaQuestions = [
    {
        question: "What does 'Yalda' mean?",
        choices: ["Birth", "Light", "Night", "Fire"],
        correct: 0,
        explanation: "Yalda means 'birth' in Aramaic, symbolizing the rebirth of the sun after the longest night."
    },
    {
        question: "Which Persian poet's work is traditionally used for Hafez Faal?",
        choices: ["Rumi", "Hafez", "Saadi", "Ferdowsi"],
        correct: 1,
        explanation: "Hafez (1315-1390) is the master of the Faal tradition, with his Divan containing ~500 mystical ghazals."
    },
    {
        question: "What fruit symbolizes the sun on Yalda Night?",
        choices: ["Watermelon", "Pomegranate", "Apple", "Orange"],
        correct: 1,
        explanation: "The pomegranate's red seeds symbolize the sun and the life force of rebirth during Yalda."
    },
    {
        question: "On which date does Yalda Night occur?",
        choices: ["December 20-21", "March 20-21", "September 22-23", "June 20-21"],
        correct: 0,
        explanation: "Yalda marks the winter solstice, the longest night of the year, around December 20-21."
    },
    {
        question: "Which nut is traditionally eaten during Yalda Night?",
        choices: ["Cashew", "Pistachio", "Almond", "Walnut"],
        correct: 1,
        explanation: "Pistachios are a classic and beloved treat during Yalda celebrations in Persian culture."
    },
    {
        question: "How many Ghazals (poems) does Hafez's Divan contain?",
        choices: ["Around 200", "Around 300", "Around 500", "Around 700"],
        correct: 2,
        explanation: "The Divan of Hafez contains approximately 500 lyrical poems called Ghazals."
    },
    {
        question: "What is the main purpose of staying awake on Yalda Night?",
        choices: ["To celebrate the harvest", "To greet the new sun at dawn", "To prepare for winter", "To light fires"],
        correct: 1,
        explanation: "The vigil through the longest night celebrates the triumph of light and waiting for the sun's return."
    },
    {
        question: "Which city was Hafez born in?",
        choices: ["Isfahan", "Shiraz", "Tehran", "Tabriz"],
        correct: 1,
        explanation: "Hafez was born in Shiraz, Iran, one of the great centers of Persian culture and poetry."
    },
    {
        question: "What is 'Sofreh Yalda'?",
        choices: ["A prayer", "A ceremonial spread of fruits and nuts", "A song", "A ritual fire"],
        correct: 1,
        explanation: "Sofreh Yalda is the sacred table spread with fruits, nuts, and sweets for the celebration."
    },
    {
        question: "Which element represents the eternal light on Yalda Night?",
        choices: ["Stars", "Candles and Fire", "Pomegranate juice", "Gold coins"],
        correct: 1,
        explanation: "Candles and fire symbolize the eternal light and the sun's triumph over darkness."
    }
];

// Trivia Game Class
class TriviaGame {
    constructor(containerId, questionId, choicesId, feedbackId, nextBtnId) {
        this.container = document.getElementById(containerId);
        this.questionEl = document.getElementById(questionId);
        this.choicesEl = document.getElementById(choicesId);
        this.feedbackEl = document.getElementById(feedbackId);
        this.nextBtn = document.getElementById(nextBtnId);
        
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = false;
        this.totalQuestions = triviaQuestions.length;
        
        this.shuffleQuestions();
        this.render();
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
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
        this.choicesEl.innerHTML = '';
        this.feedbackEl.innerHTML = '';
        this.nextBtn.style.display = 'none';
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
        if (this.answered) return;
        
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
            this.feedbackEl.innerHTML = `<span class="trivia-correct">✓ Correct!</span><span class="trivia-explanation">${question.explanation}</span>`;
        } else {
            this.feedbackEl.innerHTML = `<span class="trivia-incorrect">✗ Incorrect</span><span class="trivia-explanation">${question.explanation}</span>`;
        }
        
        this.nextBtn.style.display = 'inline-block';
    }
    
    nextQuestion() {
        this.currentQuestion++;
        this.render();
    }
    
    showResults() {
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        let message = '';
        
        if (percentage === 100) {
            message = 'Perfect! You are a true master of Yalda wisdom! 🎉';
        } else if (percentage >= 80) {
            message = 'Excellent! You have deep knowledge of Persian traditions! 🌟';
        } else if (percentage >= 60) {
            message = 'Good! You know quite a bit about Yalda Night! 🌙';
        } else if (percentage >= 40) {
            message = 'Nice effort! There\'s always more to learn about Yalda! 📚';
        } else {
            message = 'Keep exploring the beauty of Yalda traditions! 🌙✨';
        }
        
        this.questionEl.textContent = `You scored ${this.score}/${this.totalQuestions} (${percentage}%)`;
        this.choicesEl.innerHTML = '';
        this.feedbackEl.innerHTML = `<span class="trivia-finish">${message}</span>`;
        this.nextBtn.style.display = 'none';
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
        fortuneTheme.textContent = `Theme: ${fortune.theme}`;
        fortuneTranslation.textContent = fortune.english;

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
