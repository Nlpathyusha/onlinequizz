const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "Which is the smallest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Mercury",
        d: "Venus",
        correct: "c"
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const option1El = document.getElementById('option1');
const option2El = document.getElementById('option2');
const option3El = document.getElementById('option3');
const option4El = document.getElementById('option4');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const quizEl = document.getElementById('quiz');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    option1El.innerText = currentQuizData.a;
    option2El.innerText = currentQuizData.b;
    option3El.innerText = currentQuizData.c;
    option4El.innerText = currentQuizData.d;
    resetOptions();
}

function resetOptions() {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.addEventListener('click', selectOption);
    });
}

function selectOption(e) {
    resetOptions();
    e.target.classList.add('selected');
}

nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('.selected');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const selectedAnswer = selectedOption.id;
    const correctAnswer = quizData[currentQuiz].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quizEl.style.display = 'none';
        resultEl.style.display = 'block';
        scoreEl.innerText = `Your score: ${score}`;
    }
});

restartBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    quizEl.style.display = 'block';
    resultEl.style.display = 'none';
    loadQuiz();
});
