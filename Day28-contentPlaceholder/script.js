const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_text = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500) //2500ms sonra getData fonksiyonunu çalıştır

function getData() {
    header.innerHTML = '<img src="spong.jpg" alt="">'
    title.innerHTML = 'SpongeBob SquarePants'
    excerpt.innerHTML = 'SpongeBob is a cheerful and optimistic sea sponge who lives in a pineapple under the sea. He works as a fry cook at the Krusty Krab.'
    profile_img.innerHTML = '<img src="profile.jpg" alt="" srcset="">'
    name.innerHTML = 'SpongeBob'
    date.innerHTML = 'Feb 20, 2026'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
    
}