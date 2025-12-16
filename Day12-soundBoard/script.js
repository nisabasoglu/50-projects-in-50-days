const sounds = ["applause", "boo", "gasp", "tada", "victory"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  const img = document.createElement("img");
  img.src = `images/${sound}.png`; 
  img.alt = sound;

  btn.appendChild(img);
  btn.addEventListener('click', () => {
    stopSounds()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
});

function stopSounds() { // sesler üst üste binmesin diye yazdım bunu
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause() //durdurur
        song.currentTime = 0 //durdurulduğu yeri sıfırlar
    })
}
