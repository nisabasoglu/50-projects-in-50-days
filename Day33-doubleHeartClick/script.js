const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let timesClick = 0;

loveMe.addEventListener("dblclick", (e) => {
  createHeart(e);
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //Farenin sayfadaki koordinatlarını alır. Ama bu koordinatlar sayfanın sol üst köşesine göre — kutuya göre değil.
  const x = e.clientX;
  const y = e.clientY;

  //.loveMe kutusunun sayfanın sol üst köşesinden ne kadar uzakta olduğunu alır.
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  //Farenin sayfadaki konumundan kutunun konumunu çıkarır — böylece tıklanan noktanın **kutu içindeki** koordinatını bulur.
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  //Kalbi hesaplanan koordinata yerleştirir.CSS'deki position: absolute sayesinde tam o noktaya gider.
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart); //Oluşturulan kalp elementini .loveMe kutusunun içine ekler.

  /* ++timesClick  // önce 1 artır, sonra kullan
     timesClick++  // önce kullan, sonra 1 artır */
  times.innerHTML = ++timesClick;

  setTimeout(() => heart.remove(), 1000);
};
