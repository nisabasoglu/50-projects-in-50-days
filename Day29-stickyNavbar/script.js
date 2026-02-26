const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)


function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) { /* Yani navbar yüksekliği + 150 kadar sayfa kaydırılırsa stil değişecek */
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}


/* offsetHeight → görünür yüksekliği px cinsinden döndürür (padding ve border dahil, margin hariç) */