
const quizData = [
    {
        question: 'What year was Olusegun Obasanjo born?',
        answer: '1937'
    },
    {
        question: 'What year was Muhammadu Buhari born?',
        answer: '1942'
    },
    {
        question: 'What year was Goodluck Jonathan born?',
        answer: '1957'
    },
    {
        question: 'What year was Umaru Musa Yaradua born?',
        answer: '1951'
    }
];

let currentQuestion = 0;
let score = 0;

const abortit = document.getElementById('abort');

const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const startButtonElement = document.getElementById('startButton');

startButtonElement.addEventListener('click', startQuiz);

function startQuiz() {
    startButtonElement.style.display = 'none';
    loadQuestion();
}

function loadQuestion() {
    questionElement.innerText = quizData[currentQuestion].question;
    let userAnswer = prompt(quizData[currentQuestion].question);
    checkAnswer(userAnswer, quizData[currentQuestion].answer);
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer !== null) {
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            resultElement.innerText = `Correct! Score: ${score}`;
        } else {
            resultElement.innerText = `Incorrect! Score: ${score}`;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            const percentage = (score / quizData.length) * 100;
            abortit.innerHTML =  `Quiz completed!\nYour score: ${score}/${quizData.length} (${percentage.toFixed(2)}%)`;
        }
    } else {
        abortit.innerHTML = ('Quiz aborted.');
    }
}
