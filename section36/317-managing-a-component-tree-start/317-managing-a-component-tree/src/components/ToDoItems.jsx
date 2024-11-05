// import React from "react";

// function ToDoItems(props) {
//     const [isDone, setIsDone] = React.useState(false);

//     function handleClick() {
//         setIsDone(prevValue => {
//             return !prevValue;
//         });
//     }

//     return (
//         <div onClick={handleClick}>
//         <li style={{textDecoration: isDone ? "line-through" : "none"}} >
//             {props.text}
//         </li>
//         </div>
//     );
//     }

// export default ToDoItems;


//////////////////////////////////////// this is anther version of the code above in here you can delete the items ///////////////////////////////////////

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem; 
