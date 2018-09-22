import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './App.css';

class App extends Component {

  render() {

    return (
      <header>
        <img src={logo}/>
        <h1>React &amp; Redux Quiz</h1>
      </header>
    );
  }
}

export default App;