import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGreeting, getName } from './reducers';

class Display extends Component {

  static propTypes = { 
    greeting: PropTypes.string,
    name: PropTypes.string,
    getGreeting: PropTypes.func.isRequired,
  };

  render() { 
    const { greeting, name } = this.props;
    return (
      <div>
        <p>{greeting}</p>
        <p>{name}</p>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    greeting: getGreeting(state),
    name: getName(state)
  }),
  null
)(Display);
