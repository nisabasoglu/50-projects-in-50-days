const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY  //“Mouse şu an ekranda kaç px aşağıda?”
        
        const buttonTop = e.target.offsetTop //Tıklanan elementin, parent’ına göre yukarıdan olan mesafesini (pixel cinsinden) alır.“Bu buton, parent’ının tepesinden kaç px aşağıda?”
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        /* 
        | `offsetTop`               | `clientX /            |
        | ------------------------- | ----------------------------- |
        | Elementin üstten uzaklığı | Mouse’un ekrandaki konumu     |
        | Parent elemente göre      | Viewport’a (ekrana) göre      |
        */

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle) // this: event’i dinleyen butonun kendisi.

        setTimeout(() => circle.remove(), 500) // Animasyon bitince ripple’ı temizler
    })
})