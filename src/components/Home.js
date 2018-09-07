import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Display from './Display';

class Home extends Component {

  render() {

    return (
      <Router>
        <h2>nametag</h2>
        <Display/>
      </Router>
    );
  }
}

export default Home;