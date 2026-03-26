const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea"); // gizli textarea oluştur
  const password = resultEl.innerText;

  if (!password) {
    return;
  } //Şifre henüz üretilmemişse hiçbir şey yapma, fonksiyondan çık.

  textArea.value = password; // şifreyi içine yaz
  document.body.appendChild(textArea); // sayfaya ekle
  textArea.select(); // içini seç
  document.execCommand("copy"); // kopyala
  /* 
    execCommand, tarayıcıya "şu komutu çalıştır" diye söyleyen eski bir JavaScript metodur. (artık kullanımdan kaldırılıyormuş ama)

    document.execCommand('copy')  // seçili metni kopyala
    document.execCommand('paste') // yapıştır
    document.execCommand('bold')  // seçili metni kalın yap
    */

  textArea.remove(); // teaxarea'yı sil
  alert("Password copied to clipboard");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; //inputtan gelen değeri value ile alırım
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length,
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol; // JavaScript'te true sayısal işlemde 1, false ise 0 sayılır

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0],
  );

  /*
  const typesArr = [{ lower }, { upper }, { number }, { symbol }];
   
    { lower }        // kısa yazım
    { lower: lower } // uzun yazım — ikisi aynı şey
    -------------
    check lere göre şu tarzda bir şey döndürüyor:
    [
  { lower: true  },
  { upper: false },
  { number: true },
  { symbol: true }
]
    
    */

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
      // randomFunc["lower"] dersek getRandomLower fonksiyonunu verir.
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  //rastgele bir küçük harf üretir
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// String.fromCharCode(...) → ASCII kodunu harfe çevirir
// ASCII tablosunda küçük harfler 97'den başla

function getRandomUpper() {
  //rastgele bir büyük harf üretir
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  //rastgele bir küçük harf üretir
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  //rastgele bir küçük harf üretir
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
