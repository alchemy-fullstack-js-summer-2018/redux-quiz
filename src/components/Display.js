import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add, update } from './actions';
class  Display extends Component {
  static propTypes = {
    nametag: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  render() { 
    const { nametag, onEdit } = this.props;
    
    return ( 
      <p>
        {nametag.name} the {nametag.greeting}
        <button name="edit" onClick={onEdit}>Update Nametag</button>
      </p>
    );
  }
}
 
export default connect(
  null,
  { add, update }
)(Display);




