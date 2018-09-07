import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';

class App extends Component {

  render() {

    return (
      <div>
        Hello Redux Quiz!
        <Controls/>  
        <Display/>
      </div>
    );
  }
}

export default App;