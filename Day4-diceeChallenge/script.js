const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomNumber2 = Math.floor(Math.random() * 6) + 1
const imgLeft = document.querySelector('.img1');
const imgRight = document.querySelector('.img2');
let leftSrc = `images/dice${randomNumber1}.png`
let rightSrc = `images/dice${randomNumber2}.png`
imgLeft.setAttribute('src', leftSrc )
imgRight.setAttribute('src', rightSrc )

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = '<h1>Player 1 wins!</h1>'
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = '<h1>Player 2 wins!</h1>'
}else{
    document.querySelector("h1").innerHTML = '<h1>Draw!</h1>'
}