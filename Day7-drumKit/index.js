const allButton = document.querySelectorAll('button')
allButton.forEach(button => { //forEach( elemanHerTurda => { ... } )
    button.addEventListener('click', handleClick)
})

function handleClick(){
    alert('I got clicked')
}