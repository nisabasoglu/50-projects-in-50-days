const gameData = [
    [0, 0, 0], // storing player ID
    [0, 0, 0],
    [0, 0, 0],
]

let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name:'',
        symbol:'O'

    },
];

const playerConfigOverlay = document.getElementById('config-overlay')
const backdrop = document.getElementById('backdrop')
const form = document.querySelector('form')
const configErrors = document.getElementById('config-errors')

const gameAreaElement = document.getElementById('active-game')
const activePlayerName = document.getElementById('active-player-name')

const editPlayer1Btn =document.getElementById('edit-player-1-btn')
const editPlayer2Btn =document.getElementById('edit-player-2-btn')

const cancelBtn = document.getElementById('cancel-btn')
const startGame = document.getElementById('start-game-btn')

const gameFields = document.querySelectorAll('#game-board li')

const gameOver = document.getElementById('game-over')

editPlayer1Btn.addEventListener('click', openPlayerConfig)
editPlayer2Btn.addEventListener('click', openPlayerConfig)

cancelBtn.addEventListener('click', closePlayerConfig)
backdrop.addEventListener('click', closePlayerConfig)

form.addEventListener('submit', savePlayerConfig)

startGame.addEventListener('click', startNewGame)

for(const gameField of gameFields){
    gameField.addEventListener('click', selectGameField)
}