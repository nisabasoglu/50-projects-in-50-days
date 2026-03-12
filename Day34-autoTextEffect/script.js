const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "Aman Ali Rıza Bey, ağzımızın tadı kaçmasın"

let idx = 1
let speed = 300 / speedEl.value
console.log(speedEl.value)

writeText()

function writeText() {
    textEl.innerHTML = text.slice(0, idx)// metni idx'e kadar kes ve göster
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)// speed ms sonra kendini tekrar çağır
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)