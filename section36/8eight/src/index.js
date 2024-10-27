import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
// you can say in here
// import * as pi from "./math.js";
// console.log(pli);
// when you put it in the list by this way pi.default, pi.doublePi, pi.triplePi

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
