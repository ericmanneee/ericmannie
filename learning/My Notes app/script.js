const containerEl = document.querySelector('.menu-container');
const menulistEl = document.querySelector('.menu-list');
function animateMenu(){
    containerEl.classList.toggle('change');
    if(menulistEl.style.display === 'block'
    ){ 
        menulistEl.style.display = 'none'
    console.log(`DDD`);

    }else{
        menulistEl.style.display = 'block'
    }
}

containerEl.addEventListener('click', function(event){ event.preventDefault();
    animateMenu();})


window.addEventListener("click", function(event){
    console.log(`DDD${event}`);
    if(menulistEl.style.display === 'block'){
       menulistEl.style.display = 'none'
    }
    })


