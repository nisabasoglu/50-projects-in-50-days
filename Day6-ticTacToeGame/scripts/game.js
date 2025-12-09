function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  } // isimlerini girmezse return ün altı çalışmaz ve oyun alanı gözükmez
  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1; //matematik işlemi yaptığımız için direkt sayıya dönüyor + koyamamıza gerek kalmıyor
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    //basılmış yere bir daha basılmasın
    alert("please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //x mi o mu basıcak onu buluyoruz
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver() //kullanıcı değişmeden önce kazanan olup olmadığını anlamak için 
  console.log(winnerId)
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    //satırları kontrol ediyoruz
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      // 0 dan büyük olma durumunu ilk başta hepsi 0 olduğu için ekarte etmek istedim benimkiler 1 ve 2 değerini alıyorlar
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    //sütunları kontrol ediyoruz
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if ( //çaprazları kontrol ediyorum
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gamedata[2][2]
  ) {
    return gameData[0][0]
  }

  if ( //çaprazları kontrol ediyorum
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gamedata[0][2]
  ) {
    return gameData[2][0]
  }

  return 0 //kazanan yoksa
}
