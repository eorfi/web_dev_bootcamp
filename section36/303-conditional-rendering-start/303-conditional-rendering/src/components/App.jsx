import Login from "./Login";
import React from "react";

var isLoggedIn = false;
// var isLoggedIn = true;


// const currentTime = new Date().getHours();
const currentTime = new Date(2024, 25, 10, 18).getHours();

// function checkIfUserinfo() {
//   if (email === "eyad@gmail.com" && password === "123456") {
//     isLoggedIn = true;
//   } else {
//     isLoggedIn = false;
//   }

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* if isloggedin equals true, render a h1, if login is not true, then render the login compoent.*/}
      {/* {currentTime > 12 ? <h1>Why are you still working?</h1> : null} */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>  
  );
}

export default App;
