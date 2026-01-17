const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggleEl.addEventListener('click', (e) => {
    //e, event (olay) nesnesidir.Yani tıklama sırasında tarayıcının otomatik olarak oluşturduğu ve o tıklamayla ilgili tüm bilgileri taşıyan objedir.
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode' // Kullanıcı hangi elemana tıkladıysa, e.target odur.
    }else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})


function setTime () {
    const time = new Date()
    // console.log(time)  "2026-01-17T11:37:39.794Z"
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'pm' : 'am'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}<span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

    /* 
    scale(5, 0, 10, 0, 100)
    Oran hesabı:
    5, 0–10 aralığının tam ortası
    Yeni aralık 0–100
    Sonuç: 50

    biz 12 saati 360 dereceye göre dönüştürmek istediğimiz için bunu kullandık
    */
}



setInterval(setTime, 1000)