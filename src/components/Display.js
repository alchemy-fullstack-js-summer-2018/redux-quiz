import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getName, getGreeting } from './reducers';

class Display extends PureComponent {

  static propTypes = {
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  render() { 
    const { greeting, name } = this.props;

    return (
      <section>
        {greeting} {name}
      </section>
    );
  }
}
 
export default connect(
  state => ({
    name: getName(state),
    greeting: getGreeting(state)
  }),
  null
)(Display);