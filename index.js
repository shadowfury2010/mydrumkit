
var numberOfDrums= document.querySelectorAll(".drum");
for (var i=0;i < numberOfDrums.length;i++) {

numberOfDrums[i].addEventListener("click",function (){

  var innerHtmlOfDrums = this.innerHTML;
  makeSound(innerHtmlOfDrums);
  buttonAnimation(innerHtmlOfDrums);
});
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound (key){

  switch (key) {
    case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
        var tom2 = new Audio ("sounds/tom-2.mp3");
        tom2.play();
    break;

    case "s":
        var tom3 = new Audio ("sounds/tom-3.mp3");
        tom3.play();
    break;

    case "d":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play();
    break;

    case "j":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
    break;

    case "k":
      var kick = new Audio ("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "l":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
    break;

    default: console.log(innerHtmlOfDrums);

  }
}

function buttonAnimation(currentKey) {
  var x =document.querySelector("."+currentKey);
  x.classList.add("pressed");

  setTimeout(function () {
    x.classList.remove("pressed");}, 100);
}


// Calculator functions
//
// function add (num1, num2) {
//   return (num1 + num2);
// }
//
// function substract (num1, num2) {
//   return (num1 - num2);
// }
//
// function multiply (num1, num2) {
//   return (num1 * num2);
// }
//
// function divide (num1, num2) {
//   return (num1 / num2);
// }
//
// function calculator (num1, num2, operator) {
//   return operator(num1,num2);
// }
