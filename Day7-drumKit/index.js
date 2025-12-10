//butona basılmasını kontrol ediyor
const allButton = document.querySelectorAll("button");
allButton.forEach((button) => {
  //forEach( elemanHerTurda => { ... } )
  button.addEventListener("click", function () {
    /* console.log(this) /* hangi buttona basarsam onun html ini veriyor mesela k için => <button class="k drum">k</button>  
    console.log(this.innerHTML) this.innerHTML is bize k verir */
    /* button.style.color = 'white' === this.style.color = 'white' */

    var buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
    
  })
})

//klavyeye basılmasını kontrol ediyor
addEventListener('keydown', function(event){
  /* console.log(event) // mesela klavyede k ye bastığımda şunu veriyor: KeyboardEvent {isTrusted: true, key: 'v', code: 'KeyV', location: 0, ctrlKey: false, …} */
  makeSound(event.key)
  buttonAnimation(event.key)
})


function makeSound(key){
  switch (key) {
      case 'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case 'j':
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case 'k':
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case 'l':
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        console.log(buttonInnerHTML)   
    }
}

function buttonAnimation(currentKey){
  const activeButton = document.querySelector('.' + currentKey) //clası seçtim yani
  activeButton.classList.add('pressed')
  setTimeout(function(){ //(function() => Bir callback functiondır,anonimdir (isimsizdir).
    activeButton.classList.remove('pressed')
  },200)
}