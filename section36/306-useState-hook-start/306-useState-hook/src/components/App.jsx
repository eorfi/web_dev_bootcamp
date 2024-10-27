import React, {useState} from "react";

function App() {
  
  const [count, setCount] = useState(0);
  // in the above line, count is the state variable and setCount is the function that updates the state variable
  // const [red, green, blue] = [9, 4, 5];



  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

return(
  <div className="container">
    <h1>{count}</h1> 
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
);
}



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


export default App;
