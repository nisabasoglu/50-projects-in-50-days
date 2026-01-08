const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0' // yani artın counter class lı div lerin içinde 0 yazıyor

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        /* getAttribute('data-target') → HTML elementinin üzerindeki data-target attribute’unu okur. 
        console.log(typeof target, target)*/
        const c = +counter.innerText

        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}` // Math.ceil → küsurat olmasın diye yukarı yuvarlar
            setTimeout(updateCounter, 1) // 1 ms sonra fonksiyon kendini tekrar çağırır
        }else {
            counter.innerText = target
        }
    }

    updateCounter()
    /* string 12000
    string 5000
    string 7500 
    string döndürdüğü için başına + koyup onu int yaptık*/
})