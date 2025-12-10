const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes); // kullanıcı sayfada scroll yaptıkca checkBoxes fonk. çalışır

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4; //ekranın %80 yüksekliğini hesaplıyor ve bunu animasyonların başlama noktası olarak kullanıyor.
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    /* getBoundingClientRect() => bir nesne döndürür,Elementin ekrana göre konum ve boyutlarını verir. 
        {
        top: 450,
        right: 800,
        bottom: 600,
        left: 200,
        width: 300,
        height: 150
        } gibi
    */
   if(boxTop < triggerBottom){ //Eğer kutu, ekranın belirlenen tetikleme çizgisinin yukarısına geçtiyse → göster
    box.classList.add('show')
   }else{ //Eğer hâlâ çizginin altındaysa → gizle
    box.classList.remove('show')
   }
  });
}
