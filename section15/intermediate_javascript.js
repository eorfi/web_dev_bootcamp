var n = Math.random();
alert(n);
alert(n*100);

//////////////////////////////////////////////////

// dice game
var n = Math.random();
n = n * 6;
n=Math.floor(n +1);
console.log(n);

/////////////////////////////////////////////////

// love score

var name1 = prompt("enter your your name.");
var name2 = prompt("enter your their name.");

var lovescore = Math.random() *100;
lovescore = Math.floor(lovescore+1); // to make the range form 1 to 100 not form 0 to 99

alert(name1 +" and "+ name2 +" your love score is " +lovescore+ "%");

///////////////////////////////////////////////////

// if and else

var name1 = prompt("enter your your name.");
var name2 = prompt("enter your their name.");

var lovescore = Math.random() *100;
lovescore = Math.floor(lovescore+1); 

// in if in javascript equal simpale is "==="

//the important difference between three sighns and two equal sighns is that even though they both
// check for equality, with three equal signs it's also checking that the data types are matching, whareas with two equal sighns 
// it don't care about the data types

if (lovescore <= 50){
    alert(name1 +" and "+ name2 +" your love score is " +lovescore+ "% this is a bad persent");
} else {
    alert(name1 +" and "+ name2 +" your love score is " +lovescore+ "% this is a good persent");
}

/////////////////////////////////////

function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        if(year%4===0){
            if(year%100===0){
                if(year%400===0){
                    return "Leap year.";
                } else {
                    return "Not leap year.";
                }
            } else {
                return "Leap year.";
            }
        } else {
             return "Not leap year.";
        }
    
        
    
    /**************Don't change the code below****************/    
    
    }
    
    //////////////////////////////////////////////

var gustList = ["eyad", "ahmed", "mohmed", "abdo", "omar"];
// console.log(gustList);
// console.log(gustList.length);
// console.log(gustList[0]);

//includes
// looks through your array and see if it atches with any of the items inside the array
// and if it does then this line of code will true, and if it doesn't then it will return false.

var user_name = prompt("enter your name here.")
if(gustList.includes(user_name)){
    alert("wellcome to party " +user_name);
}else{
    alert("you are not invited "+user_name);
}

///////////////////////////////////////////////////

// if you want to element to your list
//  gustList.push("a") // this will add the element to the end of the list

// gustList.pop() will remove the last item from the list

////////////////////////////////////////////////////////

// fizzbuzz 

var list_number = [];
var n = 1;

function fizzBuzz() {

if (n%3 === 0 && n%5 === 0){
    list_number.push("FizzBuzz");
}
else if (n%3 === 0){
    list_number.push("Fizz");
}
else if (n%5 === 0){
    list_number.push("Buzz");
}

else {
    list_number.push(n);
}
    
n ++;
    console.log(list_number);
}

fizzBuzz(15);

//////////////////////////////////////////////

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here
        var random_number = Math.floor(Math.random() * names.length);
        var random_person = names[random_number];
        return random_person+" is going to buy lunch today!";
        
    /******Don't change the code below*******/    
    }

//////////////////////////////////////////////////////

// while loops 

var i = 1;

while(i <= 10){
    console.log(i);
    i ++;
}

//////////////////////////////////////////////////////

var n = 1;

while(n <= 100){
    if (n%3 === 0 && n%5 === 0){
        console.log("FizzBuzz");
    }
    else if (n%3 === 0){
        console.log("Fizz");
    }
    else if (n%5 === 0){
        console.log("Buzz");
    }

    else {
        console.log(n);
    }
    
    n ++;
}

/////////////////////////////////////////////////////////

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//////////////////////////////////////////////////////

// The for loops

for (var i=0; i<=10; i++) {
    console.log(i);
}

/////////////////////////////////////////////////////\\

for (var i=1; i<=100; i++) {
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
        
    else if (i%3===0){
        console.log("Fizz");
    }

    else if (i%5===0){
        console.log("Buzz")
    }

    else{
        console.log(i)
    }
}

///////////////////////////////////////////////////////

// this is a hard chalnge

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var output = [];
        if (n===1){
            output = [0];
        }
        else if (n===2){
            output = [0, 1];
        }
        
        else {
            output = [0, 1];
            for (var i = 2; i<n; i++){
                output.push(output[output.length-2] + output[output.length-1]);
            }
             
        }
        
        return output;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    output = fibonacciGenerator(2);
    console.log(output)

    /////////////////////////////////////////////////

     
