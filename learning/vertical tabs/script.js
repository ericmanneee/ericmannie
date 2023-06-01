
function openCity(evt, cityName){

    var tabcontentEl, i, tablinkEl
    tabcontentEl = document.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontentEl.length; i++) {
        tabcontentEl[i].style.display = 'none';
    }
    tablinkEl = document.getElementsByClassName('tablinks')
    for (i = 0; i < tablinkEl.length; i++) {
        tablinkEl[i].className = tablinkEl[i].className.replace(' active', '') 
        
    }
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active'
}

document.getElementById('defaultOpen').click();
