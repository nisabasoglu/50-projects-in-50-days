const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = [] /* filtreleme işlemi için bunu oluşturdum */

getData()


filter.addEventListener('input', (e) => filterData(e.target.value))


async function getData() {
    // API'ye istek atıyor, cevap gelene kadar bekliyor
    const res = await fetch('https://randomuser.me/api?results=20')

    // Gelen cevabı JSON'a çeviriyor, o da bitene kadar bekliyor
    const { results } = await res.json()
    
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

    result.appendChild(li)

    });
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        }else {
            item.classList.add('hide')
        }
    })
}

/* 
innerText sadece görünen metni getirir, innerHTML ise HTML etiketleriyle birlikte getirir.
*/