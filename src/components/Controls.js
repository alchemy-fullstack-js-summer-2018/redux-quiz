import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update } from './actions';
import { getGreeting, getName } from './reducers';

class Controls extends Component {
  static propTypes = {
    greeting: PropTypes.String,
    name: PropTypes.String
  };

  render() { 
    return (

      <form>
        <input></input>
        <input></input>
      </form>
    );
  }
}
 
export default connect(
  state => ({
    greeting: getGreeting(state),
    name: getName(state)
  }),
  { update }
)(Controls);