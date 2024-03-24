
const quizData = [
    {
        question: 'What year was Olisiego Obasanjo born?',
        answer: '1953'
    },
    {
        question: 'What year was Buhari born?',
        answer: '1952'
    },
    {
        question: 'What year was Goodluck born?',
        answer: '1973'
    },
    {
        question: 'What year was Yahradua born?',
        answer: '1952'
    }
];

let currentQuestion = 0;
let score = 0;

const abortit = document.getElementById('abo');

//const usernameElement = document.getElementById('username');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
//const ghafyElement = document.getElementById('ghafy');
const startButtonElement = document.getElementById('startbutton');

startButtonElement.addEventListener('click',startQuiz);

function startQuiz(){
    startButton.style.display = 'none';
    loadQuestion();

}

function loadQuestion(){
     
    questionElement.innerText = quizData[currentQuestion].question;
    let userAnswer = propmt(quizData[currentQuestion].question);
    checkAnswer(userAnswer, quizData[currentQuestion].answer);
}

function checkAnswer(userAnswer, correctAnswer){
    if(userAnswer !== null){
        if(userAnswer.toLowerCase().toLowerCase() === correctAnswer.toLowerCase()){
            score++;
            resultElement.innerText = correct! score: ${score};
            }else{
                resultElement.innerText = `incorrect! score: ${score}`;
            }
        
    
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuestion();
        }else{
            const percentage = (score/quizData.length)*100;
            abortit.innerHTML = `Quiz completed!\nYour score:${score}/${quizData.length}(${percentage}%)`;
        }
    
    }else{
        abortit.innerHTML=('Quiz aborted.');
    }
}

// function showResult(){
//     resultElement.innerText = ('You scored'+score 
//     + 'out off '+ quizData.length);
// }