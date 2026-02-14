const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //Bana bu canvas üzerinde 2 boyutlu çizim yapabileceğim bir ortam ver. (çizim işlemlerini ctx ile yapıyoruz)

let size = 10 // çizim kalınlığı (aslında yarıçap)
let isPressed = false
let color ='black'

// x ve y bir önceki mouse konumunu tutuyor(başlangıç noktası yani)
let x
let y

// mousedown => kullanıcı fare tuşuna bastığı anda tetiklenir
canvas.addEventListener('mousedown', (e)=> {
    isPressed=true

    // basılan yerin koordinatları
    x= e.offsetX
    y=e.offsetY

})

//mouseup => kullanıcı mouse tuşunu bıraktığı anda tetiklenir.
canvas.addEventListener('mouseup', (e)=> {
    isPressed=false

    // x ve y yi sıfırladım yani
    x= undefined
    y= undefined

})

//mousemove => mouse hareket ettiği sürece sürekli olarak tetiklenir.
canvas.addEventListener('mousemove', (e)=> {
    if(isPressed){
        // mouse basılıysa yeni konumları aldım
        const x2 = e.offsetX
        const y2 = e.offsetY

        // yeni noktaya bir daire çiz
        drawCircle(x2, y2)

        // eski noktadan yeni noktaya bir çizgi çek
        drawLine(x, y, x2, y2) 

        // eski noktayı güncelle (bu sayede kesintisiz çizim oluşuyor
        x= x2
        y= y2
    }
    

})

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

    // çizgi ve daire aynı kalınlıkta olsun diye yarıcam 20 yani çapı 40 çizginin kalınlığını da 40 yaptım yani
    ctx.lineWidth = size * 2
    ctx.stroke()
}

/* drawCircle(100, 200)
drawLine(300, 300, 200, 500) */


colorEl.addEventListener('change', (e) => {
    color = e.target.value
})


function updateSizeOnScreen() {
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5
    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5
    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})


clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
/* 
x = 0 → Sol üstten başla
y = 0 → En üstten başla
width = canvas.width → Canvas’ın tüm genişliği
height = canvas.height → Canvas’ın tüm yüksekliği

yani canvas ın içini temizliyor

*/