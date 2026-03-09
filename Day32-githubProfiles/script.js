const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username)
  } catch (err) {
    if(err.response.status === 404) {
        createErrorCard('No profile with this user name')
    }
    
  }
}

async function getRepos(username){
    try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');
    //? → parametrenin başladığını belirtir.sort=created → repoları oluşturulma tarihine göre sırala demektir.
    addReposToCard(data);
  } catch (err) {
    if(err) {
        createErrorCard('Problem fetching repos')
    }
    
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>

          <ul>
            <li>${user.followers} Followers</li>
            <li>${user.following} Following</li>
            <li>${user.public_repos} Repos</li>
          </ul>

          <div id="repos"></div>
        </div>
      </div>
      `
      main.innerHTML = cardHTML
}

function createErrorCard(message) {
    const cardHTML = `
    <div class="card">
    <h1>${message}</h1>
    <div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank' // yeni sekmede açılsın
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Tarayıcının varsayılan form davranışını engeller.Normalde form gönderilince sayfa yenilenir; bu satır bunu önler.
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = ''

  }
});
