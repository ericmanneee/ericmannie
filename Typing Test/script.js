//saved quotes
const quotes = ['When you have eliminated the impossible, what ever remains, however improbable, must be the truth.' ,'There is nothing more deceptive than an obvious fact.', 'Mediocrity knows nothing higher than itself; but talent instantly recognises genius.','i never make exceptions, exceptions disapproves the rule.', 'What one man can invent another can discover.', 'Nothing clears up a case as much as stating it to another person.', 'Education never ends, Watson. It is a series of lessons, with the greatest for the last']
//store lists of words and the index the player is on
let words = []
let wordIndex = 0
//get starting time
let startTime = Date.now()
//page elements
const quoteElements = document.getElementById('quote')
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value')
const boxEl = document.getElementById('message-box')
//get the start event
document.getElementById('start').addEventListener('click', ()=>{
    boxEl.style.top = '30%'
    
    //get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[quoteIndex]
    //put the quote into an array of words
    words = quote.split(' ')
    //reset the word index for tracking
    wordIndex = 0

    //UI updates
    //create an array of span elements so we can set a class
    const spanWords = words.map(function(word){
        return `<span>${word} </span>`
    })
    //convert into string and set as innerHTML on quote display
    quoteElements.innerHTML = spanWords.join('')
    //highlight the first word
    quoteElements.childNodes[0].className = 'highlight'
    //clear any prior messages
    messageElement.innerText = ''

    //setup the textbox
    //clear the textbox
    typedValueElement.value = ''
    //set focus
    typedValueElement.focus()
    //set the event handler

    //start the timer
    startTime = new Date().getTime()

})

typedValueElement.addEventListener('input', ()=>{
    //get current word
    const currentWord = words[wordIndex]
    //get the current value
    const typedValue = typedValueElement.value

    if(typedValue === currentWord && wordIndex === words.length - 1){
        //end of sentence
        //display success
        const elapsedTime = new Date().getTime() - startTime
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000}seconds`

        messageElement.innerText = message
        typedValueElement.removeEventListener('input', this)
        typedValueElement.blur()
    } else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        //end of word
        //clear the typed value for the new word
        typedValueElement.value = ''
        //move to next word
        wordIndex++
        //reset the class name for all element in quote
        for (const wordElement of quoteElements.childNodes){
            wordElement.className = ''
        }
        //highlight the new word 
        quoteElements.childNodes[wordIndex].className = 'highlight'
    } else if(currentWord.startsWith(typedValue)){
        //currently correct
        //highlight the next word
        typedValueElement.className = ''
    }else{
        //error state
        typedValueElement.className = 'error'
    }
})