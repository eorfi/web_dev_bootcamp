import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
      setHeadingText("Submitted");
  }
  function handleMouseOver() {
      // buttonColor = "black";
      // botton.backgroundColor = "black"
      setMouseOver(true);
  }

  function handleMouseDown() {
      // buttonColor = "red";
      setMouseOver(false);  

  }

    return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button  style={{ backgroundColor: isMouseOver ?  "black" : "white"}} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseDown}>Submit</button>
      {/* this line means if the is mouseover turn it black eals turn wite */}
    </div>
  );
}

export default App ;
