function resetGameStatus(){
  activePlayer = 0
  currentRound = 0
  gameIsOver = false
  gameOver.firstElementChild.innerHTML = '<h2>You won, <span id="winner-name">PLAYER NAME</span>!</h2>'
  gameOver.style.display = 'none'

  let gameBoardIndex = 0
  for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++ ){
      gameData[i][j] = 0
      const gameFieldsElement = gameFields[gameBoardIndex]
      gameFieldsElement.textContent = ''
      gameFieldsElement.classList.remove('disabled')
      gameBoardIndex++
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  };// isimlerini girmezse return ün altı çalışmaz ve oyun alanı gözükmez
  resetGameStatus();
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
  if(gameIsOver){ //game bittiği halde boş kutulara basabiliyordum onu engelledim
    return
  }
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
  
  if(winnerId !== 0){
    endGame(winnerId)
  }

  currentRound++

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
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]
  }

  if ( //çaprazları kontrol ediyorum
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0]
  }

  if(currentRound === 9){ //hem kazanan yok hem de oyun bitti (9 hamle)
    return -1
  }

  return 0 //kazanan yoksa
}

function endGame(winnerId){
  gameIsOver = true
  gameOver.style.display = 'block'
  if(winnerId > 0){
    const winnerName = players[winnerId - 1].name
  gameOver.firstElementChild.firstElementChild.textContent = winnerName //span e ulaştım
  }else{
    gameOver.firstElementChild.textContent = 'It\'s a draw' //h2 ye ekledim
  }
}