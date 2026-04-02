const container = document.getElementById('container')
const colors = ['#F5004F', '#F9E400', '#7C00FE', '#06D001', '#021A54']

const squares = 500

for(let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.background = color

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function removeColor (element) {
    element.style.background ='#1d1d1d'
}