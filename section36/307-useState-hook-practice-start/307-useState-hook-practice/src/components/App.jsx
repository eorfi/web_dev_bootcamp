import React, {useState} from "react";

function App() {

  setInterval(getTime, 1000);

  // const now = new Date().toLocaleTimeString();
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const [currentTime, setCurrentTime] = useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }


  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
      
    </div>
  );
}

export default App;
