import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';

class App extends Component {

  render() {

    return (
      <div>
        <div>Hello Redux Quiz!</div>
        <Controls/>
        <Display/>
      </div>
    );
  }
}

export default App;