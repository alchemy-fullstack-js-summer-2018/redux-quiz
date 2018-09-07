import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGreeting, changeName } from './actions';
import { getGreeting, getName } from './reducers';

class Display extends PureComponent {

  static propTypes = {
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };


  render() {
    return (
      <div>
        Hello display
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: getGreeting(state),
    name: getName(state)
  }),
  { changeGreeting, changeName }
)(Display);