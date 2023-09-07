var r=Math.floor(Math.random()*6+1);
if(r==1){
    document.getElementsByClassName("no1")[0].style.visibility="visible";
}else if(r==2){
    document.getElementsByClassName("no3")[0].style.visibility="visible";
    document.getElementsByClassName("no2")[0].style.visibility="visible";
}else if(r==3){
    document.getElementsByClassName("no3")[0].style.visibility="visible";
    document.getElementsByClassName("no2")[0].style.visibility="visible";
    document.getElementsByClassName("no1")[0].style.visibility="visible";
}else if(r==4){
    document.getElementsByClassName("no3")[0].style.visibility="visible";
    document.getElementsByClassName("no2")[0].style.visibility="visible";
    document.getElementsByClassName("no4")[0].style.visibility="visible";
    document.getElementsByClassName("no5")[0].style.visibility="visible";
}else if(r==5){
    document.getElementsByClassName("no2")[0].style.visibility="visible";
    document.getElementsByClassName("no3")[0].style.visibility="visible";
    document.getElementsByClassName("no4")[0].style.visibility="visible";
    document.getElementsByClassName("no5")[0].style.visibility="visible";
    document.getElementsByClassName("no1")[0].style.visibility="visible";
}else {
    document.getElementsByClassName("no2")[0].style.visibility="visible";
    document.getElementsByClassName("no3")[0].style.visibility="visible";
    document.getElementsByClassName("no4")[0].style.visibility="visible";
    document.getElementsByClassName("no5")[0].style.visibility="visible";
    document.getElementsByClassName("no6")[0].style.visibility="visible";
    document.getElementsByClassName("no7")[0].style.visibility="visible";
}
var t=Math.floor(Math.random()*6+1);
if(t==1){
    document.getElementsByClassName("no1")[1].style.visibility="visible";
}else if(t==2){
    document.getElementsByClassName("no3")[1].style.visibility="visible";
    document.getElementsByClassName("no2")[1].style.visibility="visible";
}else if(t==3){
    document.getElementsByClassName("no3")[1].style.visibility="visible";
    document.getElementsByClassName("no2")[1].style.visibility="visible";
    document.getElementsByClassName("no1")[1].style.visibility="visible";
}else if(t==4){
    document.getElementsByClassName("no3")[1].style.visibility="visible";
    document.getElementsByClassName("no2")[1].style.visibility="visible";
    document.getElementsByClassName("no4")[1].style.visibility="visible";
    document.getElementsByClassName("no5")[1].style.visibility="visible";
}else if(t==5){
    document.getElementsByClassName("no2")[1].style.visibility="visible";
    document.getElementsByClassName("no3")[1].style.visibility="visible";
    document.getElementsByClassName("no4")[1].style.visibility="visible";
    document.getElementsByClassName("no5")[1].style.visibility="visible";
    document.getElementsByClassName("no1")[1].style.visibility="visible";
}else {
    document.getElementsByClassName("no2")[1].style.visibility="visible";
    document.getElementsByClassName("no3")[1].style.visibility="visible";
    document.getElementsByClassName("no4")[1].style.visibility="visible";
    document.getElementsByClassName("no5")[1].style.visibility="visible";
    document.getElementsByClassName("no6")[1].style.visibility="visible";
    document.getElementsByClassName("no7")[1].style.visibility="visible";
}

// You can also use for loop for select more than one classes
if(t>r){
    document.getElementById("hi").innerHTML="Player 2 Wins";
}else if(r>t){
    document.getElementById("hi").innerHTML="Player 1 Wins";
}else{
    document.getElementById("hi").innerHTML="DRAW!! Refresh Again";
}




var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
  buttonAnimation(event.key.toUpperCase());

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "J":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "K":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "L":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey.toLowerCase());

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
