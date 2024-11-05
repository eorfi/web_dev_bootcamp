import React, {useState} from "react";


function App() {
  const [headingtext, setHeadingText] = useState("");
  const [text, setText] =useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(text);
    // if you do add the curly braces, then you are going to to set your heading text to be hacascript code
    event.preventDefault();
    // this will prevent the page from refreshing
  }

  return (
    <div className="container">
      <h1>Hello {headingtext}</h1>
      <form onSubmit={handleClick}>
        <input 
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={text}
        />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
