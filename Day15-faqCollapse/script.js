const buttons = document.querySelectorAll('button') //querySelectorAll NodeList döndürür (dizi gibi davranır)
buttons.forEach(button => {
    button.addEventListener('click', () => { //Tıklanınca butonun parent’ına active class ını aç/kapat
        button.parentNode.classList.toggle('active')
    })
})