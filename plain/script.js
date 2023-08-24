const elem = document.getElementById('animate')
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition)
    }catch{
        elem.innerHTML = 'geolocation is not supported by this browser.'
    }
}

function showPosition(position){
    elem.innerHTML = 'latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.latitude 
}

getLocation()