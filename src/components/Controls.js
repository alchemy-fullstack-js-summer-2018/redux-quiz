import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { greetingUpdate, nameUpdate } from './actions';

class Controls extends Component {

  state = {
    greeting: '',
    name: ''
  };

  static propTypes = {
    greeting: PropTypes.string,
    name: PropTypes.string,
    greetingUpdate: PropTypes.func.isRequired,
    nameUpdate: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preveDefault();
    const { greeting, name } = this.state;
    greetingUpdate(greeting);
    nameUpdate(name);
  }

  render() { 
    const { greeting, name } = this.state;
    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Greeting:
          <input name="greeting" value={greeting} onChange={this.handleChange}></input>
        </label>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
 
export default connect(
  null,
  { greetingUpdate, nameUpdate }
)(Controls);