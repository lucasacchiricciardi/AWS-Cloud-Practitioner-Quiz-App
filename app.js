// App State
const STATE_KEY = 'aws_quiz_progress_v1';

let state = {
    currentQuestionIndex: 0,
    answers: {}, // map of questionId -> selectedOptionLetter
    score: 0
};

// DOM Elements
const els = {
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    scoreText: document.getElementById('score-text'),
    qNumber: document.getElementById('q-number'),
    qText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackArea: document.getElementById('feedback-area'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackExplanation: document.getElementById('feedback-explanation'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    resetBtn: document.getElementById('reset-btn')
};

// Initialize
function init() {
    loadState();
    renderMath(); // Update stats
    renderQuestion();

    // Event Listeners
    els.nextBtn.addEventListener('click', handleNext);
    els.prevBtn.addEventListener('click', handlePrev);
    els.resetBtn.addEventListener('click', resetQuiz);
}

// State Management
function loadState() {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
        try {
            state = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved state", e);
        }
    }
}

function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function resetQuiz() {
    if (confirm('Are you sure you want to reset your progress?')) {
        state = {
            currentQuestionIndex: 0,
            answers: {},
            score: 0
        };
        saveState();
        renderMath();
        renderQuestion();
    }
}

// Rendering
function renderQuestion() {
    const q = questions[state.currentQuestionIndex];

    // Update Header
    els.qNumber.textContent = `Question ${state.currentQuestionIndex + 1} of ${questions.length}`;
    els.qText.textContent = q.question;

    // Reset UI
    els.optionsContainer.innerHTML = '';
    els.feedbackArea.classList.add('hidden');
    els.feedbackArea.className = 'feedback-area hidden'; // reset modifiers

    // Check if already answered
    const existingAnswer = state.answers[q.id];

    // Render Options
    q.options.forEach(optText => {
        // Extract letter from option text (Assumes format "A. Text")
        // The extractor made options like "A. Text".
        // Sometimes extracted options are messy, e.g. "A. Text B. Text" in one string if logic failed (but we hope it didn't).
        // Let's retry strict split if needed, but for now assume logic mostly worked.

        let letter = optText.charAt(0);
        // Clean cleanup if needed

        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.letter = letter;

        const letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = letter + '.';

        const textSpan = document.createElement('span');
        textSpan.textContent = optText.substring(2).trim() || optText; // remove "A."

        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);

        btn.addEventListener('click', () => handleOptionSelect(q, letter));

        if (existingAnswer) {
            btn.disabled = true;
            if (letter === existingAnswer) {
                btn.classList.add('selected');
            }
            if (letter === q.answer) {
                btn.classList.add('correct');
            } else if (letter === existingAnswer) {
                btn.classList.add('incorrect');
            }
        }

        els.optionsContainer.appendChild(btn);
    });

    // Show Feedback if answered
    if (existingAnswer) {
        showFeedback(q, existingAnswer);
        els.nextBtn.textContent = (state.currentQuestionIndex === questions.length - 1) ? 'Finish' : 'Next';
    } else {
        els.nextBtn.textContent = 'Skip';
    }

    // Nav State
    els.prevBtn.disabled = state.currentQuestionIndex === 0;

    // Progress Bar
    const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;
    els.progressBar.style.width = `${progress}%`;
}

function handleOptionSelect(q, selectedLetter) {
    if (state.answers[q.id]) return; // Already answered

    // Save Answer
    state.answers[q.id] = selectedLetter;

    // Check correctness
    const isCorrect = (selectedLetter === q.answer);

    // Update State
    saveState();

    // Update UI
    renderQuestion(); // Re-render to show styling
    renderMath();
}

function showFeedback(q, selectedLetter) {
    const isCorrect = (selectedLetter === q.answer);

    els.feedbackArea.classList.remove('hidden');
    els.feedbackArea.classList.remove('correct', 'incorrect');
    els.feedbackArea.classList.add(isCorrect ? 'correct' : 'incorrect');

    els.feedbackText.textContent = isCorrect ? 'Correct!' : `Incorrect. The correct answer is ${q.answer}.`;

    // Use raw_answer for explanation if available, usually contains "Explanation: ..."
    let explanation = q.raw_answer || "";
    // Maybe strip the "A. Text" part if it repeats?
    // Start explanation after "Explanation:" keyword if present
    const explParts = explanation.split("Explanation:");
    if (explParts.length > 1) {
        explanation = explParts[1].trim();
    }

    els.feedbackExplanation.textContent = explanation;
}

function handleNext() {
    if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
        saveState();
        renderQuestion();
    }
}

function handlePrev() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        saveState();
        renderQuestion();
    }
}

function renderMath() {
    // Progress: Answered / Total
    const answeredCount = Object.keys(state.answers).length;
    els.progressText.textContent = `${answeredCount} / ${questions.length}`;

    // Score
    if (answeredCount === 0) {
        els.scoreText.textContent = "0%";
        return;
    }

    let correctCount = 0;
    for (const [qId, letter] of Object.entries(state.answers)) {
        // Find question ref - brute force or map? 
        // qId is number. questions[qId-1] should match if IDs are 1-based sequential
        const q = questions.find(x => x.id == qId);
        if (q && q.answer === letter) {
            correctCount++;
        }
    }

    const percentage = Math.round((correctCount / answeredCount) * 100);
    els.scoreText.textContent = `${percentage}%`;
}

// Start
init();
