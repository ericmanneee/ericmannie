const button = document.getElementById('btn')
const input = document.getElementById('task')
const list = document.getElementById('tasks-list')

function addTask(){
    if(input.value == ''){
        alert('please input a task')
    }else{
        let task = document.createElement('li');
        task.innerHTML = input.value
        list.appendChild(task)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        task.appendChild(span)

    }
    input.value = ''
    saveData()
    

}

list.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem('data', list.innerHTML)

}
function getData(){
    list.innerHTML = localStorage.getItem('data')
}
getData()