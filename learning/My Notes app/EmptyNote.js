
const addBtn = document.getElementById('add-note')
const workspaceEl = document.querySelector('.workspace')
// creating notes on the workspace
function addNote(text = ''){
    const newnote = document.createElement('div')
    newnote.classList.add('container')
    newnote.innerHTML = `<div class="navbar">
    <p id="save">SAVE</p>
    <p id="delete">&#10006</p>
    </div>
 <textarea class="textarea" placeholder="Click to type in your note...">${text}</textarea>
 <div class="popup">
     <div class="popup-holder">
     <p>Save note as:</p>
 <textarea type="text" id="filename" placeholder="Enter file name"></textarea>
 <div class="validity">
     <span id="okay">&#10004</span>
     <span id="cancel">&#10006</span>
 </div>
 </div>
 </div>` 
    workspaceEl.appendChild(newnote)

    //setting the popup
    newnote.querySelector('#save').addEventListener('click', ()=>{
        newnote.querySelector('.popup').style.height = '100vh'
    })
    //setting the close popup
    newnote.querySelector('#cancel').addEventListener('click', ()=>{
        newnote.querySelector('.popup').style.height = '0'
    })
    //delete note from workspace
    newnote.querySelector('#delete').addEventListener('click', ()=>{
        newnote.remove()
        saveNote()
        saveNameFile()
    })
    //to save as file
    newnote.querySelector('#okay').addEventListener('click', ()=>{
        
    })
    // autosave on input keyup
    newnote.querySelector('.textarea').addEventListener('keyup', saveNote)
    //to add the active class
    newnote.querySelector('.textarea').onfocus = function active(){
        newnote.classList.add('active')
    }
    //to remove active class
    newnote.querySelector('.textarea').onblur = function active(){
        newnote.classList.remove('active')
    }
    //to get filename
    newnote.querySelector('#filename').addEventListener('keyup', ()=>{
        filename = newnote.querySelector('#filename').value
        return filename
    }
    )

    
    
    //to add savefilename to okay element
    newnote.querySelector('#okay').addEventListener('click', ()=>{ 
        const link = document.createElement('a')
        const content = newnote.querySelector('.textarea').value
        const file = new Blob([content], {type: 'text/plain'})
        link.href = URL.createObjectURL(file)
        link.download = filename
        link.click()
        URL.revokeObjectURL(link.href)
        newnote.querySelector('.popup').style.height = '0'
        alert('note is saved')
    })


}


//saving to local storage
function saveNote(){
    const notes = document.querySelectorAll('.textarea')
    const data = []
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    if(data.length == 0){
        localStorage.removeItem('notes')
    }else{
        localStorage.setItem('notes', JSON.stringify(data))
    }
    const notesname = document.querySelectorAll('#filename')
    const names = []
    notesname.forEach(
        (name)=>{
            names.push(name.value)
        }
    )
    if(names.length == 0){
        localStorage.removeItem('notenames')
    }else{
        localStorage.setItem('notesname', JSON.stringify(names))
    }
}

//getting saved note from local storage
function getNotes(){
    const savednotes = JSON.parse(localStorage.getItem('notes'))
    //to add empty note on page load
    if(savednotes == null){
        addNote()
    }else{
        savednotes.forEach(
            (texts)=>{
                addNote(texts)
            }
        )
    }
    
    }

//self calling getnote
getNotes()

//calling the addnote function with the addnote button
addBtn.addEventListener('click', addNote)
function getlist(){if(localStorage.length > 0){
  for (let i = 0; i< localStorage.length; i++) {
    if(localStorage.key(i) != 'filename'){
   const filename = document.createTextNode(localStorage.key(i))
  const node = document.createElement('li');
  const link = document.createElement('a')
  link.href = '#'
  ul = document.querySelector(".note-list")
   node.appendChild(link)
   link.appendChild(filename)
    ul.appendChild(node)
  }
  
}
}}