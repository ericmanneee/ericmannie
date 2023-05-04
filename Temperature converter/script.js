const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const calculateF = document.getElementById('F');
const calculateC = document.getElementById('C');
const resultF = document.getElementById('result1');
const resultC = document.getElementById('result2');

function calculateFah(){
    const celsiusValue = celsiusInput.value;
    const result = (celsiusValue * 9/5) + 32;
    resultF.innerText = result + 'F';
}
calculateF.addEventListener('click', calculateFah);

function calculateCel(){
    const fahrenheitValue = fahrenheitInput.value;
    const result = (fahrenheitValue - 32) * 5/9;
    resultC.innerText = result.toFixed(1) + 'C';
}
calculateC.addEventListener('click', calculateCel);
