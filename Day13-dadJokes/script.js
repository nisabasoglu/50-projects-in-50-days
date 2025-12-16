const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    /* icanhazdadjoke.com:
        Varsayılan olarak HTML döndürür biz JSON istiyoruz
        Bu header:
        Accept: application/json
        “Bana cevabı JSON olarak ver” demek 
    */
    fetch('https://icanhazdadjoke.com', config) // bu bize promise döndürüyor bu yüzden aşağıdakileri ekliyorum
    .then(response => response.json()) //response’u JSON’a çevirme
    .then(data => { //gerçek veriyi kullanma
        jokeElement.innerHTML = data.joke // json la dönen verinin içindeki joke a ulaştım ve onu ekledim kendime
    })
} 


/* 
fetch()        → Promise
  ↓
.then()        → Response
  ↓
.json()        → Promise
  ↓
.then()        → data (JS object)
*/

jokeBtn.addEventListener('click', generateJoke)




/* bu kullanım daha kaliteli!!!

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config) 

    /* 
    fetch() → Promise döndürür
    await:
    “Bu satırda bekle, cevap gelince devam et”
    
    const data = await res.json()
    jokeElement.innerHTML = data.joke  
}


async → fonksiyon Promise döndürür 
// Promise, JavaScript’te ileride sonuçlanacak (asenkron) bir işlemin sonucunu temsil eden bir objedir.

await → Promise çözülene kadar bekler

fetch → API isteği

res.json() → JS objesi

data.joke → gerçek içerik



*/