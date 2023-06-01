const delEl = document.getElementById('delete')
const containerEl = document.querySelector('.container')
const input = document.querySelector('.textarea')
const saveEl = document.getElementById('save')
const filenameEl = document.getElementById('filename')

getNote()
function getNote(){
    input.value = localStorage.getIte("filename")
}

function saveData(){
    const data = input.value
    const filename = filenameEl.value;
    updateLocalStorage(filename, data)
    
}
function  updateLocalStorage(filename, data){

    localStorage.setItem(filename, data)

    }


saveEl.addEventListener('click', saveData)

delEl.addEventListener('click', ()=>{
    containerEl.remove()
})
