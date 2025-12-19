const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('text-area')

textArea.focus() //textArea yı otomatık yazılabilir olarak açıyor (basıp yazmamıza gerek kalmıyor yani)

textArea.addEventListener('keyup', (e) => { // keyup: Tuş bırakıldığında
    createTags(e.target.value)
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        },100)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',') //String’i , karakterine göre böler, array döndürür
    .filter(tag => tag.trim() !== '') //Boş olanları elenir, sadece gerçek tag’ler kalır
    .map(tag => tag.trim()) //Başta/sonda kalan boşlukları temizler
    tagsEl.innerHTML = '' //harfler üst üste bindemis dite
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    });
}

/* trim() => string’in başındaki ve sonundaki boşlukları temizler */

function randomSelect() {
    const times = 30
    const interval = setInterval(() => { //belirli aralıklarla bir kodu tekrar tekrar çalıştırır
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}