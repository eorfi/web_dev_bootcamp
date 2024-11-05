import React from "react";

function App() {

  const [fullName, setFullName] = React.useState(
    {
      fName: "",
      lName: ""
    }
    );

  function handleChange(event){
    const {value, name} = event.target;

    setFullName(prevValue => {
      // in this case, we are using the previous value to update the state.
      // we are not using the event object to update the state.
      // this this the main difference between class components and functional components.
      // in class components, we use the event object to update the state.
      if(name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if(name === "lName"){
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  // just as a word of warining, make sure that in the future when you are creating your own apps or in any of the exercises or challenges, do not try the access the event or anything related to the event, inside a setState function.

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName"
         onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}/>
        <input name="lName"
         onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
