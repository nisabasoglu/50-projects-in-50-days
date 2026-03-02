const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

/* console.log(slidesLength) //resim sayısını bana döndürdü */

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh` /* "Senin slider'ında kaç tane eleman varsa, en sonuncusunu bul, onun ekran yüksekliği kadar katını hesapla ve kapsayıcıyı (container) o kadar yukarıya çek." */

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight //sliderContainer öğesinin o anki görüntülenebilir yüksekliği
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }
    //Sen 2. slayta (yani index 2'ye) gitmek istiyorsan, önceki 2 slaytı tamamen ekranın dışına itmen gerekir.
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` 
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}