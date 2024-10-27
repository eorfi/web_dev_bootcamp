var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//     return x * 2;
//     }

// const double_numbers = numbers.map(double);
// console.log(double_numbers);

////////////////////////// OR //////////////////////////

// var newNumbers = [];
// numbers.forEach(function(x){
//     newNumbers.push(x * 2);
// });
////////////////////////////////////////////////////////

// const newNumbers = numbers.map(function(x){
//     return x * 2;
// }

//Filter - Create a new array by keeping the items that return true.

// filter takes a function as an argument and that function should return a boolean value
// numbers.filter(function(num){
//     return num > 10;
// });

////////////////////////// OR //////////////////////////

// var newNumbers = [];
// numbers.forEach(function(num){
//     if(num > 10){
//         newNumbers.push(num);
//     }
// });

// you can see it's still the same but it obviously tooks a lot more effort than simply using the filter method

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumbers = 0;
// numbers.forEach(function(currentNumber){
//     sum += currentNumber;
// });

////////////////////////// OR //////////////////////////

// reduce takes two arguments, the first is a function and the second is the initial value of the accumulator
// var new_number = numbers.reduce(function(accumulator, currentNumber){
//     return accumulator + currentNumber;
// });
// confirm.log(new_number);

// you can see the output in the imgs ///////////////////////

//Find - find the first item that matches from an array.

// const newNumber = numbers.findIndex(function(num){
//     return num > 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function(emojiEntry){
    return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);

