import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// 1. create Entry component
// 2. create props to replace the hard coded values
// 2a. import emojipedia array const
// 3b. Map the emojipedia array and render Entry components

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

{/* this a dictionary list*/}
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* we are going to pass this function into our map function */}
      </dl>
    </div>
  );
}

export default App;
