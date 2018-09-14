import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';


class Display extends Component {
  static propTypes = {
    controls: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { controls, onEdit, remove } = this.props;

    return (
      <p>
        {controls.name} allows you {controls.budget}
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(controls.key)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null,
  { remove }
)(Display);