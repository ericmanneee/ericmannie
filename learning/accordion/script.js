const accordionEls = document.querySelectorAll('.accordion')

for (let i = 0; i < accordionEls.length; i++) {
    accordionEls[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let panel = this.nextElementSibling;

        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        } else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
    
}