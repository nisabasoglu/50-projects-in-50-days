const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors); // ["fire", "grass", "poison", "water", ...]

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};
/* 
fetchPokemons() çağrıldı
  → i=1, getPokemon(1) → API'den Bulbasaur verisi geldi
  → i=2, getPokemon(2) → API'den Ivysaur verisi geldi
  → ...pokemon_count'a kadar devam
  (`await` burada kritik — her pokemon **sırayla** çekilir)
*/

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url); // API'ye istek at, cevap gelene kadar bekle
  const data = await res.json(); //// gelen cevabı JSON'a çevir, bitene kadar bekle
  createPoemonCard(data);
};

const createPoemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); //ilk harfi büyüt sonra ona 1. indexten sona kadar olan kısmı ekle
  const id = pokemon.id.toString().padStart(3, "0");
  //padStart(3, '0') — sayıyı en az 3 karaktere tamamlar, eksik kalan yeri '0' ile doldurur.
  const poke_types = pokemon.types.map((type) => type.type.name); // 1. eleman: type = { slot:1, type: { name: "grass" } }  →  "grass"
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  // "fire"   → poke_types'ta var mı? → yok  (-1)
  // "grass"  → poke_types'ta var mı? → var  (0) → bunu döndür
  // indexOf bulamazsa -1, bulursa 0 veya üstü döner. > -1 koşulu "bulundu" anlamına geliyor.
  const color = colors[type]
  pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ix/scarlet-violet/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>`;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
