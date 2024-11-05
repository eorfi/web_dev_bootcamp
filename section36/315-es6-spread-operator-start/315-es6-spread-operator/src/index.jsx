import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

// const citrus = ["lime", "lemon", "orange"]
// const fruits = ["apple", "banana", "coconut", ...citrus]
// // in this line of code, we are using the spread operator to combine the citrus array with the fruits array
// console.log(fruits) // ["apple", "banana", "coconut", "lime", "lemon", "orange"]

// const fullName = {
//     fName: "James",
//     lName: "Bond"
// }

// const user = {
//     ...fullName,
//     id: 1,
//     username: "jamesbond007"
// }