let container = document.querySelector('.container')
let gridBtn = document.getElementById('submit-grid')
let deleteBtn = document.getElementById('clear-grid')
let gridWidth = document.getElementById('grid-width')
let gridHeight = document.getElementById('grid-height')
let colorBtn = document.getElementById('color')
let eraseBtn = document.getElementById('erase')
let paintBtn = document.getElementById('paint')
let widthValue = document.getElementById('gridwv')
let heightValue = document.getElementById('gridhv')
//events object
let events = {
    mouse: {
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup'
    },
    Touch: {
        down: 'Touchstart',
        move: 'Touchmove',
        up: 'Touchend'
    },
}

let deviceType= ''
//initially draw and erase will be false
let draw = false
let erase = false

//detect touch device
function isTouchDevice(){
    try{
        //create touch event(it would fail for desktops and display error)
        document.createEvent('TouchEvent')
        deviceType = 'touch'
        return true
    }
    catch(e){
        deviceType = 'mouse'
        return false
    }
}
isTouchDevice()
console.log(isTouchDevice());

//grid button event
gridBtn.addEventListener('click', ()=>{
    //initially clear the grid
    container.innerHTML = ''
    //count variable for generating unique id
    let count = 0
    //loop for creating rows
    for (let i = 0; i < gridHeight.value; i++) {
        //increment count by 2
        count+=2
        //create row div
        let div = document.createElement('div')
        div.classList.add('gridRow')
        //create columns

    for(let j = 0; j < gridWidth.value; j++){
        count += 2
        let col = document.createElement('div')
        col.classList.add('gridCol')
        /* we need unique ids for all columns (for touch screens specifically)*/
        col.setAttribute('id',`gridCol${count}`)
        /* for example if deviceType = 'mouse', the statement for the event would be events[mouse].down which equals to mouse down
        if deviceType = 'touch'
        the statement for event would be events[touch].down which equals to touch start
        */
       col.addEventListener(events[deviceType].down, ()=>{
        //user starts drawing
        draw = true
        // erase = true then background = transparent else color
        if(erase){
            col.style.backgroundColor = 'transparent'
        }else{
            col.style.backgroundColor = colorBtn.value
        }
       })
       col.addEventListener(events[deviceType].move, (e)=>{
        /* elementFrompoint returns the element at x,y position of mouse
         */
        let elementId = document.elementsFromPoint(
            !isTouchDevice() ? e.clientX : e.touches[0].clientX,
            !isTouchDevice() ? e.clientY : e.touches[0].clientY
        ).id;
        //checker
        checker(elementId)
       })
       //stop drawing
       col.addEventListener(events[deviceType].up, ()=>{
        draw = false
       })
       //append columns
       div.appendChild(col)
    }
        // append grid to container
        container.appendChild(div)
    }
})
function checker(elementId){
    let gridColumns = document.querySelectorAll('.gridCol')
    //loop through all boxes
    gridColumns.forEach(element =>{
        //if id matches then color
        if(elementId == element.id){
            if (draw && !erase){
                element.style.backgroundColor = colorBtn.value
            }else if(draw && erase){
                element.style.backgroundColor = 'transperent'

            }
        }
    })
}
//clear grid
deleteBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
})
//erase button
eraseBtn.addEventListener('click', ()=>{
    erase = true
})
//paint button
paintBtn.addEventListener('click', ()=>{
    erase = false
})
//display grid height and width
gridHeight.addEventListener('input', ()=>{
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}`:gridHeight.value
})
gridWidth.addEventListener('input', ()=>{
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}`:gridWidth.value
})
window.onload = ()=>{
    gridWidth.value = 0
    gridHeight.value = 0
}
