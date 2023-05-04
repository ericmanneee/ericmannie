const btnEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const taxInput = document.getElementById('tax');
const totalSpan = document.getElementById('total');

function calculateTotal() {
    const billValue = billInput.value;
    const taxValue = taxInput.value;
    const tatalValue = billValue * (1 + taxValue/100);
    totalSpan.innerText = tatalValue.toFixed(2);
}
btnEl.addEventListener('click', calculateTotal);