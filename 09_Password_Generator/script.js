let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;


const passwordRangeInput = document.getElementById('rangeInp');
const rangeValue = document.getElementById('rangeval');
const generateButton = document.getElementById('btn');
const passwordDiv = document.getElementById('password');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');



const generatePassword = (passLength) => {

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    const uppweCase = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numbers = isNumbers ? '0123456789' : '';
    const symbols = isSymbols ? '!@#$%^&*()_+' : '';

    const passCaharacter = lowercase + uppweCase + numbers + symbols;

    let storedPassword = "";

    for (let i = 0; i < passLength; i++) {

        const charIndex = Math.floor(Math.random() * passCaharacter.length);
        storedPassword += passCaharacter[charIndex];

    }

    return storedPassword;
};

passwordRangeInput.addEventListener('input', (e) => {

    passwordLength = +e.target.value;
    rangeValue.innerText = passwordLength;

});

generateButton.addEventListener('click', () => {

    isUpperCase = uppercase.checked;
    isNumbers = numbers.checked;
    isSymbols = symbols.checked;

    const password = generatePassword(passwordLength);

    passwordDiv.innerHTML = password;

});

passwordDiv.addEventListener('click', (e) => {

    if (e.target.innerText.length > 0) {

        navigator.clipboard.writeText(passwordDiv.innerText)
            .then(() => {
                alert('copied to clipboard');
            }).catch(err => {
                alert(`${err} something went wrong!`)
            });
    }
});

