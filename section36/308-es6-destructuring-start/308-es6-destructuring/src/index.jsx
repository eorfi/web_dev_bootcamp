import animals from "./data";
import { useAnimals } from "./data";

// get the array from the data file 
const [cat, dog] = animals;

// get the ojects from the array 
// const {name, sound} = cat;

// and you can do this in this way

// const {name: catName, sound: catSound} = animals[0];
// console.log(catName); // cat

// console.log(name); // cat


// give the name and sound a custom value

// const {name = "Fluffy", sound = "Purr"} = cat;
// console.log(name); // **** in this line it will print cat because we have the value in the object but if we don't have the value in the object then it will print Fluffy

 // how to got object which has an object inside it
// const {food, water, feedingRequirements} = cat;
// console.log(feedingRequirements.food); // 2

// const {name, sound, feedingRequirements: {food, water}} = cat;
// console.log(food); // 2



// console.log(useAnimals(cat)); // [ 'cat', [Function] ]

// now by i now the outfit of the useAnimals function i can destructure it in this way

const [animal, makeSound] = useAnimals(cat);
console.log(animal); // cat
makeSound(); // meow






// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
