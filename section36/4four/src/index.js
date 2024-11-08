//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";

import ReactDOM from "react-dom";

const name = "eyad";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Created by {name}</h1>
    <h2>Copyright {currentYear}</h2>
  </div>,
  document.getElementById("root")
);
