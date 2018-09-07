import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGreeting, changeName } from './actions';

class Controls extends Component {

  static propTypes = {
    changeGreeting: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  render() { 
    const { changeGreeting, changeName, greeting, name } = this.props;
    return (
      <div>
        <input name="greeting" value={greeting} onChange={() => changeGreeting()}/>
        <input name="name" value={name} onChange={() => changeName()}/>
      </div>
    );
  }
}
 
export default connect(
  null,
  { changeGreeting, changeName }
)(Controls);