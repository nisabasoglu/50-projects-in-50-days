const codes = document.querySelectorAll(".code")

codes[0].focus()

codes.forEach((code,idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
            
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})

/* 
keydown => Tuşa basılır basılmaz tetiklenen event
e.key => keydown event'i tetiklendiğinde hangi tuşa basıldığını söyleyen bir string değerdir.
 */