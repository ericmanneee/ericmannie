dradElement(document.getElementById('plant1'))
dradElement(document.getElementById('plant2'))
dradElement(document.getElementById('plant3'))
dradElement(document.getElementById('plant4'))
dradElement(document.getElementById('plant5'))
dradElement(document.getElementById('plant6'))
dradElement(document.getElementById('plant7'))
dradElement(document.getElementById('plant8'))
dradElement(document.getElementById('plant9'))
dradElement(document.getElementById('plant10'))
dradElement(document.getElementById('plant11'))
dradElement(document.getElementById('plant12'))
dradElement(document.getElementById('plant13'))
dradElement(document.getElementById('plant14'))

function dradElement(terrariumElement){
    //set 4 positions for positioning on the screen
    let pos1 = 0
        pos2 = 0
        pos3 = 0
        pos4 = 0

    terrariumElement.onpointerdown = pointerDrag
    function pointerDrag(e){
        e.preventDefault()
        pos3 = e.clientX
        pos4 = e.clientY
        document.onpointermove = elementDrag
        document.onpointerup = stopElementDrag
        document.ondblclick = bringForth

    }
    function elementDrag(e){
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px'
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px'
    }
    function stopElementDrag(){
        document.onpointerup = null
        document.onpointermove = null
    }
    function bringForth(){
    terrariumElement.style.zIndex+3
    }
}