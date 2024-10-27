import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";

var lucy_number = Math.random();
lucy_number = lucy_number * 10;
lucy_number = Math.floor(lucy_number + 1);

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <h3>You lucy number is {lucy_number}</h3>
  </div>,
  document.getElementById("root")
);
