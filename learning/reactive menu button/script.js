const containerEl = document.querySelector('.container');
function animateMenu(){
    containerEl.classList.toggle('change')
}

containerEl.addEventListener('click', animateMenu)