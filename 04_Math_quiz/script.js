const question = document.getElementById('questions');
const Qform = document.getElementById('Qform');
const getscore = document.getElementById('score');

let ans;
let score = 0;

const randomNumber = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1) + min);

};

const GenerateQuestion = () => {

    const rand1 = randomNumber(1, 10);
    const rand2 = randomNumber(1, 10);
    let question;
    let answer;
    switch (questionType) {
        case 1:
            question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
            answer = rand1 * rand2;
            break;
        case 2:
            question = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
            answer = rand1 + rand2;
            break;
        case 3:
            question = `Q. What is ${firstNumber} Divided By ${secondNumber} ?`;
            answer = rand1 / rand2;
            break;
        case 4:
            question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
            answer = rand1 - rand2;
            break;
        default:
            question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
            answer = rand1 - rand2;
            break;
    }

    return { question, answer };

};

const showQuestion = () => {

    const { questions, answer } = GenerateQuestion();
    question.innerText = questions;
    ans = answer;

};



const checkAnswer = (event) => {

    event.preventDefault();
    const formData = new FormData(Qform);
    const userAnswer = parseInt(formData.get('answer'));

    if (userAnswer === ans) {
        score++;
    }
    else {
        score--;
    }
    getscore.innerText = score;
    event.target.reset();
    showQuestion();

};






