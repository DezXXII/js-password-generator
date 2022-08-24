// Buttons
const btnGenerate = document.querySelector('.btnGenerate');

// Password
const passwordElement = document.querySelector('.password');

// Conditionals
const lengthElement = document.querySelector('.length');
const uppercaseElement = document.querySelector('.upper');
const lowercaseElement = document.querySelector('.lower');
const numbersElement = document.querySelector('.number');
const symbolsElement = document.querySelector('.symbols');

// Characters
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!#$%&/()=?¡¿^`{}[]+'";



function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

    let generatedPassword = '';

    if(uppercaseElement.checked) {
        generatedPassword += getUppercase();
    }
    
    if(lowercaseElement.checked) {
        generatedPassword += getLowercase();
    }

    if(numbersElement.checked) {
        generatedPassword += getNumbers();
    }

    if(symbolsElement.checked) {
        generatedPassword += getSymbols();
    }

    for (let i = generatedPassword.length; i < lengthElement.value; i++) {
        const mixedCharacters = checkedConditionals();
        generatedPassword += mixedCharacters
        
    }
    passwordElement.textContent = generatedPassword;
}

function checkedConditionals(){

    const characters = [];

    if(uppercaseElement.checked){
        characters.push(getUppercase());
    }

    if(lowercaseElement.checked){
        characters.push(getLowercase());
    }

    if(numbersElement.checked){
        characters.push(getNumbers());
    }

    if(symbolsElement.checked){
        characters.push(getSymbols());
    }

    if(characters.length === 0) return '';
    
    return characters[Math.floor(Math.random() * characters.length)]   
    
}


btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();
    generatePassword();
});