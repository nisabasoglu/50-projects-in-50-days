const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText // innerText:sadece metni alır/yazar , innerHTML: HTML içeriğini alır/yazar
        .split('') //Metni harf harf böler → ["E","m","a","i","l"]
        .map((letter, index) => `<span style='transition-delay:${index * 50}ms'>${letter}</span>`) //Her harfi bir <span> içine koyar ve her bir harf bir öncekinden 50ms sonra animasyon yapar.Map sonrasi elimize şu geçer ["<span>E</span>", "<span>m</span>", ...]
        .join('') //Oluşan span array’ini tek bir string haline getirir

        /* 
        Önce:

        <label>Email</label>

        Sonra:

        <label>
        <span>E</span><span>m</span><span>a</span><span>i</span><span>l</span>
        </label>
        */
})