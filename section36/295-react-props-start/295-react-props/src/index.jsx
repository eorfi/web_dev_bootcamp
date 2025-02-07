import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  // props is an object that contains all the properties that are passed to this component
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="rrr@gamil.com"></Card>
    <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="+987 654 321" email="aa@gmail.com"></Card>
    <Card name="Chuck Norris" img="https://i.pinimg.com/originals/6f/9f/9e/6f9f9e2e4e3c3b6b6b6b6b6b6b6b6b6b.jpg" tel="+918 372 574" email="weew@hmail.com"></Card>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
