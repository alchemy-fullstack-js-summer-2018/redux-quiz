import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Controls extends Component {

  render() {

    return (
      <form>
        controls Component
        <label>
          Greeting: <input type="text" name="greeting" value="greeting"></input>
        </label>
        <label>
          Name: <input type="text" name="name" value="name"></input>
        </label>
      </form>
    );
  }
}

export default Controls;
