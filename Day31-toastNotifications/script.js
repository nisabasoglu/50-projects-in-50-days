const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage() //Eğer message doluysa → onu kullan.Eğer message null/undefined ise → rastgele mesaj al

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}



/* 

innerText — Düz metin olarak işler
notif.innerText = '<strong>Merhaba</strong>'
// Ekranda görünen: <strong>Merhaba</strong>  (tag'ler metin olarak görünür)

--------------------------

innerHTML — HTML olarak yorumlar
notif.innerHTML = '<strong>Merhaba</strong>'
// Ekranda görünen: Merhaba  (kalın yazı, tag'ler işlenir)

*/