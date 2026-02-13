const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //Bana bu canvas üzerinde 2 boyutlu çizim yapabileceğim bir ortam ver.

let size = 20 // width 
let color ='black'
let x
let y

function drawCircle(x, y) {
    ctx.beginPath() // önceki şekillerle beraber çizilmesin diye bunu ekledik
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color // dairenin iç rengini boyar
    ctx.fill() // şekli boyar

}

/* 
ctx.arc(
  x,      // merkez x
  y,      // merkez y
  size,   // yarıçap
  0,      // başlangıç açısı
  Math.PI * 2 = 360  // bitiş açısı
)
*/


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1) //başlangıç noktası
    ctx.lineTo(x2, y2) //bitiş noktası
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.stroke()
}

drawCircle(100, 200)
drawLine(300, 300, 200, 500)


