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
    const questions = `Q. What is ${rand1} * ${rand2}?`;
    const answer = rand1 * rand2;
    return { questions, answer };

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






