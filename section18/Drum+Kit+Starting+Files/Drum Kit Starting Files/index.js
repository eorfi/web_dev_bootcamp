// document.querySelector("button").addEventListener("click", Click);
// // so what this line does is it finds the first button in our document, which is the w drum button, and it it click it goes to the function click()

// function Click() {
//     alert("I got clicked!")
// }

// but you can do this by a more good way called anonymous function.

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrumButtons; i++){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio('./sounds/tom-1.mp3');
//             audio.play();
//     });
// }
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrumButtons; i++){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             this.style.color = "whight";
//     });
// }


//Detecting Button Pressed 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML; 
        makeSound_byKey(buttonInnerHTML);
        button_animation(buttonInnerHTML);
    });
}

// Detecting Keyboard press
document.addEventListener("keypress", function(event){
    makeSound_byKey(event.key)
    button_animation(event.key);
});


function makeSound_byKey(key){
    switch (key) {
        case "w":
              audio = new Audio('./sounds/tom-1.mp3');
              audio.play();
            break;
        case "a":
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
       
        default:
            break;
       }
}

function button_animation(currentkey){
    var activeButton = document.querySelector("."+currentkey); // this is the format queryselector
    activeButton.classList.add("pressed"); // pressed in css file
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100) // that mean after 100ms do that
}

// https://en.wikipedia.org/wiki/JavaScript

//$0.addEventListener("click", function() {
//     console.log("I got clicked");
// }); 



// this is Higher Order Functions
// higher order functions are functions that can take other functions as inputs

// function add(num1, num2) {
//     return num1  + num2;
// }
// function multiply(num1, num2) {
//     return num1  * num2;
// }
// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// calculator(2,3,add);

// debugger;
// calculator(4,8,multiply);



////////////////////////////////////////////////

// rhis is the object 

// var houseKeeper1 = {
//     yearsOfExerience: 12,
//     name: jane,
//     cleaningRepertoir: ["bathroom", "lobby", "bedroom"]
// }

    
// this is Constructor function

// function HouseKeeper(yearsOfExerience, name, age, hasWorkpermit, workSkils) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkpermit = hasWorkpermit;
//     this.workSkils = workSkils;
//     this.cleaninRepertoire = cleaninRepertoire;
//     this.clean = function (){
//         alert("cleaning in progress...")
// }
// }
 
// $0.addEventListener("click", function(event) {
//     console.log(event);
// });

/////////////////////////////////////////////////

// function AddEventListener(typeOfEvent, callback) {
//     // detect event code...
// var eventThatHappened = {
//     eventType: "keypress",
//     key: "p",
//     duractionOfkeypress: 2
// }
// if (eventThatHappened.eventType === typeOfEvent) {
// callback(eventThatHappened);
// }

// AddEventListener("keypress", function(event) {
//     console.log(event); 
//  });

//  AddEventListener("keypress", function(event) {
//     console.log(event); 
//  });