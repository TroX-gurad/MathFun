let totalQuestions = 10;
let currentQuestion = 0;
let correctAnswers = 0;
let askedQuestions = new Set();
let max = 150;
let min = 0;

const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const inputEl = document.getElementById('input');
const subBtn = document.getElementById('subbtn');
const nextBtn = document.getElementById('nextbtn');
const resultEl = document.getElementById('result');
const questionEl = document.querySelector('h3');

nextBtn.style.display = 'none';

function generateQuestion() {
    let num1, num2;
    do {
        num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (askedQuestions.has(`${num1}+${num2}`));

    askedQuestions.add(`${num1}+${num2}`);

    num1El.textContent = num1;
    num2El.textContent = num2;
    inputEl.value = '';
    resultEl.textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(inputEl.value, 10);
    const correctAnswer = parseInt(num1El.textContent) + parseInt(num2El.textContent);

    if (userAnswer === correctAnswer) {
        correctAnswers++;
        resultEl.textContent = 'Correct!';
        resultEl.classList.remove('wrong'); 
        resultEl.classList.add('right');
    } else {
        resultEl.textContent = 'Wrong! The correct answer is ' + correctAnswer;
        resultEl.classList.remove('right');
        resultEl.classList.add('wrong');
    }

    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        subBtn.style.display = 'none';
        nextBtn.style.display = 'inline';
    } else {
        subBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        inputEl.remove();  
        questionEl.remove();  
        resultEl.textContent = `Quiz Over! You answered ${correctAnswers} out of ${totalQuestions} correctly.`;

        
        const link = document.createElement('a');
        link.href = "Main.html";  
        link.textContent = "Go Back";
        link.classList.add('quiz-link');
        resultEl.appendChild(link);  
    }
}

subBtn.onclick = () => {
    checkAnswer();
};

nextBtn.onclick = () => {
    nextBtn.style.display = 'none';
    subBtn.style.display = 'inline';
    generateQuestion();
};

generateQuestion();
