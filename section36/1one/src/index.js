// https://codesandbox.io/p/sandbox

// https://babeljs.io/ - Babel is a JavaScript compiler that allows us to write modern JavaScript that will work in any browser
// var React = require('react');
import React from 'react'; // import React from the react module
// var ReactDOM = require('react-dom'); // react-dom is a separate package from react that allows us to render our components to the DOM
import ReactDOM from 'react-dom'; // import ReactDOM from the react-dom module

ReactDOM.render(<div><h1>Hello, world!</h1><p>to can make two html element put it in div</p></div>, document.getElementById('root')); 
// first argument is the component you want to render, second argument is the DOM node that you want to render the component to