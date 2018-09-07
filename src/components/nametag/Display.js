import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Display extends Component {
  static propTypes = {
    greeting: PropTypes.string,
    name: PropTypes.string
  };

  render() { 
    const { greeting, name } = this.props;
    return (
      <section>
        <p>{greeting}</p>
        <p>{name}</p>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    name: state,
    greeting: state
  })
)(Display);