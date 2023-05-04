const resultEl = document.getElementById('result');
const btnEl = document.getElementById('check');
const inputEl = document.getElementById('words');

function palindrome(){
    const str = inputEl.value;
     const str2 = str + ' is not a palindrome';
    const polishedStr = str.replace(/\W+|\_/gi, '').toLowerCase();
    const reversedStr = polishedStr.split('').reverse().join("");
    if(polishedStr == reversedStr){
        resultEl.innerText = str + " is a palindrome."
        resultEl.style.color = 'brown';
    } else {
        resultEl.innerText = str2;
        resultEl.style.color = 'red';
    }
}

btnEl.addEventListener('click', palindrome);
