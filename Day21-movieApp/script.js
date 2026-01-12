const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=da2a23dbb9ead6419e9057ba9b5c770c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=da2a23dbb9ead6419e9057ba9b5c770c&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  /* 
    fetch(url)
    API’ye HTTP isteği atar
    await → cevap gelene kadar bekle
    res = API’nin verdiği ham cevap
    */
  const data = await res.json(); /* Gelen cevabı JSON formatına çevirir */

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        
        `;
        main.appendChild(movieEl)
  });
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    }else if (vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* 
    Normalde, Form submit olunca → sayfa yenilenir.Biz sayfanın yenilenmesini durduruyoruz, aramayı JavaScript ile yapıyoruz
    */
  const searchTerm = search.value; /* Kullanıcının yazdığı değer alınıyor */
  if (searchTerm && searchTerm !== "") {
    /* “Geçerli bir arama var mı?” */
    getMovies(SEARCH_API + searchTerm); /* Geçerli arama varsa → API çağrısı */
    search.value = ""; /* Aramadan sonra input boşaltılır */
  } else {
    window.location.reload();
    /* 
        window: Tarayıcı
        location: Adres çubuğu
        reload(): Sayfayı yenile
        */
  }
});
