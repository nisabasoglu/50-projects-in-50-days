function openPlayerConfig(event){
    const selectedPlayerId = event.target.dataset.playerId
    /* eğer player-id olsaydı dataset['player-id'] olarak yazardım*/
    playerConfigOverlay.style.display = 'block'
    backdrop.style.display = 'block'
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none'
    backdrop.style.display = 'none'
    form.firstElementChild.classList.remove('error')
    configErrors.textContent =''
}

function savePlayerConfig(event){
    event.preventDefault() /* Formun varsayılan davranışını durdurur, sayfanın yenilenmesini engeller. Form gönderilir, sayfa yenilenmez
    JavaScript ile veriyi biz işleriz*/
    const formData = new FormData(event.target)
    /* FormData yapısı, form içindeki tüm input değerlerini kolayca almak için kullanılır.Burada event.target → eventi tetikleyen formun kendisidir. 
    event.target = eventi başlatan HTML elemanı
    (Buradaki event.target = form FormData(form) → formun içindeki bütün input bilgilerini toplar.)
    */
    const enteredPlayerName = formData.get('playername').trim(); /*Formun içindeki bir input’u name değeri üzerinden getirir.
    trim => bir stringin başındaki ve sonundaki boşlukları siler.
    */
    if(!enteredPlayerName){ /* empty string a falsy value in js (enteredPlayerName === '' yazsak da olurdu)*/
        event.target.firstElementChild.classList.add('error') /* formun içindeki ilk çocuk olan div e class ekledim 
        yani kullanıcı isim girmediğinde bu error class ı eklenicek
        */
        configErrors.textContent = 'Please enter a valid name!' ;
        return; /* burdaki return ü koymamın sebebi return ün altında kalan işlemlerin çalışmaması için */
    }



    
}