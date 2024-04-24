// document.querySelector("button").addEventListener("click", Click);
// // so what this line does is it finds the first button in our document, which is the w drum button, and it it click it goes to the function click()

// function Click() {
//     alert("I got clicked!")
// }

// but you can do this by a more good way called anonymous function.

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            alert("I got clicked!");
    });
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





    