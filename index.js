// button press checker
let drumLoop = document.querySelectorAll(".drum").length;
let letter;
document.addEventListener("keypress", function(event){
    letter = String(event.key);
    playSound(letter);
    pressAnimation(event.key);
})
// mouse click checker
for (let i = 0; i < drumLoop; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {       
        let sound = this.innerHTML;
        playSound(sound);
        pressAnimation(this.innerHTML);
    });
}
// sound player
function playSound (key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(sound)
    }
}
//call ing the pressAnimation from the click or btn press funtion
function pressAnimation(press){
    let buttonPress = document.querySelector("." + press)
    buttonPress.classList.add("pressed");
    setTimeout(function () {
        buttonPress.classList.remove("pressed");
    },200)
}





// var audio = new Audio ("sounds/tom-1.mp3")
// audio.play();



