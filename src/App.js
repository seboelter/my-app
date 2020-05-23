//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    //Takes infinite amount of elements, but at least 3, html, js, children
    return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
  }
}

// Below code was default, tutorial has class structure
// function App() {
//   return (
//     // This is Jsx, syntactical sugar, because of build workflow
//     <div className="App">
//      <h1>Hi, I'm a React App</h1>
//     </div>
//   );
// }

export default App;
