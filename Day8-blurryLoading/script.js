const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30); //Belirtilen fonksiyonu sürekli, belirli zaman aralıklarıyla çalıştırır.setInterval(functionName, milisaniye) (bu durmadan çalışıyor setTimeout bir kere çalışır)

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.textContent = `${load}%`; //.innerText de yazabilirdim textContent yerine
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  /* load 0’dan 100’e giderken opacity ise 1’den 0’a gitsin.
   opacity => Bir elementin ne kadar görünür olduğunu ayarlarsın (1 => tamamen görünür)
  */
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (number, inMin, inMax, outMin, outMax) => { /* Bir sayıyı başka bir aralıkta aynı oranda karşılık gelen değere çevir. */
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
