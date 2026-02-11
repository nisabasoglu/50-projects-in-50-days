const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart) 
/*
sürükleme başlarsa, dragStart fonksiyonunu çalıştır
---------------------------------------------
element.addEventListener("event", function)
------------------------------------------
element.addEventListener("event", () => {
  // yapılacak iş
})
*/

fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    /* this = event’i tetikleyen element */
    this.className += ' hold' // fill + hold oldu yani
    setTimeout(() => this.className = 'invisible', 0) // 0 = şu an değil, iş bittikten sonra
    
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()  //“Default davranışı engelle ve drop’a izin ver.”
}

function dragEnter(e) {
    e.preventDefault() //“Default davranışı engelle ve drop’a izin ver.”
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill) //“fill elementini al, this’in içine koy.”
}


/* 
<a href="https://google.com">Git</a>
Normalde tıklayınca Google’a gider.

Ama:

link.addEventListener("click", function(e) {
  e.preventDefault()
})
👉 Artık hiçbir yere gitmez.

*/