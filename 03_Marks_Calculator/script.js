
const calculateFrom = document.getElementById('calculateForm');
const submit = document.getElementById('btn');
const result = document.getElementById('result');

submit.addEventListener('click', (e) => {

    const maxMarks = 400;

    e.preventDefault();
    const formData = new FormData(calculateFrom);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = +value;

    });

    if (data.math < 0 || data.math > 100 || data.english < 0 || data.english > 100 || data.physics < 0 || data.physics > 100 || data.chemistry < 0 || data.chemistry > 100) {
        alert("Please enter valid values between 0 and 100.");

    }
    else {

        const totalMarks = data.math + data.english + data.physics + data.chemistry;

        const percentage = (totalMarks / maxMarks) * 100;
        result.innerText = `You have got ${totalMarks} out of ${maxMarks} and your percentage is - ${percentage}%`;
    }

});





