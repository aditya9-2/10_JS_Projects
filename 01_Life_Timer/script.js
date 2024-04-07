const beforeText = document.getElementById('beforeText');
const afterText = document.getElementById('afterText');
const input = document.getElementById('dob');
const button = document.getElementById('btn');

const years = document.getElementById('year');
const months = document.getElementById('month');
const days = document.getElementById('days');;
const hours = document.getElementById('hrs')
const minutes = document.getElementById('mins');
const secs = document.getElementById('seconds');

let dateOfBirth;


const makeTwoDig = (number) => {

    return number > 9 ? number : `0${number}`

};


const updateAge = () => {
    const currentDate = new Date();

    const dateDiff = currentDate - dateOfBirth;


    const getYear = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const getMonth = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365) % 12);
    const getDay = Math.floor(dateDiff / (1000 * 60 * 60 * 24) % 30);
    const getHour = Math.floor(dateDiff / (1000 * 60 * 60) % 24);
    const getMins = Math.floor(dateDiff / (1000 * 60) % 60);
    const getSecs = Math.floor(dateDiff / 1000) % 60;

    years.innerHTML = makeTwoDig(getYear);
    months.innerHTML = makeTwoDig(getMonth);
    days.innerHTML = makeTwoDig(getDay);
    hours.innerHTML = makeTwoDig(getHour);
    minutes.innerHTML = makeTwoDig(getMins);
    secs.innerHTML = makeTwoDig(getSecs);

};

const localStorageGetter = () => {

    const localYear = localStorage.getItem('year');
    const localMonth = localStorage.getItem('month');
    const localDate = localStorage.getItem('date');

    if (localYear && localMonth && localDate) {
        dateOfBirth = new Date(localYear, localMonth, localDate)
    }
    updateAge();
};


const contetnToggler = () => {
    updateAge();

    if (dateOfBirth) {

        beforeText.classList.add('hide');
        afterText.classList.remove('hide');

    }
    else {

        beforeText.classList.remove('hide');
        afterText.classList.add('hide');
    }

};


const setDOBHandler = () => {

    const dateString = input.value;
    dateOfBirth = dateString ? new Date(dateString) : null;

    if (dateOfBirth) {
        localStorage.setItem("year", dateOfBirth.getFullYear());
        localStorage.setItem("month", dateOfBirth.getMonth());
        localStorage.setItem("date", dateOfBirth.getDate());
    }
    contetnToggler();
    setInterval(() => updateAge(), 1000);
};

localStorageGetter();
contetnToggler();

button.addEventListener('click', setDOBHandler);