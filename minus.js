let totalquestions = 10;
let currentquestions = 0;
let correctanswers = 0;
let askedquestions = new Set();
let max = 150;
let min = 0;

const num1EL = document.getElementById('num1');
const num2EL = document.getElementById('num2');
const inputEl = document.getElementById('MinusInput'); 
const subBtn = document.getElementById('subbtn');
const nextBtn = document.getElementById('Nextbtn'); 
const resultEL = document.getElementById('result');
const questionEL = document.querySelector('h3');

nextBtn.style.display = 'none';

function genquestion() {
    let num1, num2;
    do {
        num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (askedquestions.has(`${num1} + ${num2}`));
    askedquestions.add(`${num1} + ${num2}`);

    if (num1 < num2) {
        num1EL.textContent = num2;
        num2EL.textContent = num1;
    } else {
        num1EL.textContent = num1;
        num2EL.textContent = num2;
    }
    inputEl.value = '';
    resultEL.textContent = '';
}

function checkanswer() {
    const userAnswer = parseInt(inputEl.value, 10);
    const correctAnswer = parseInt(num1EL.textContent) - parseInt(num2EL.textContent); 
    if (userAnswer === correctAnswer) {
        correctanswers++;
        resultEL.textContent = 'Correct!';
        resultEL.classList.remove('wrong');
        resultEL.classList.add('right');
    } else {
        resultEL.textContent = 'Wrong! The correct answer is ' + correctAnswer;
        resultEL.classList.remove('right');
        resultEL.classList.add('wrong');
    }

    currentquestions++;
    if (currentquestions < totalquestions) {
        subBtn.style.display = 'none';
        nextBtn.style.display = 'inline';
    } else {
        subBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        inputEl.remove();
        resultEL.textContent = `Quiz Over! You answered ${correctanswers} out of ${totalquestions} correctly.`;

        const link = document.createElement('a');
        link.href = "Main.html";
        link.textContent = "Go Back";
        resultEL.appendChild(link);
    }
}

subBtn.onclick = () => {
    checkanswer();
};

nextBtn.onclick = () => {
    nextBtn.style.display = 'none';
    subBtn.style.display = 'inline';
    genquestion();
};

genquestion();
