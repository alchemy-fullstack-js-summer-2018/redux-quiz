import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <h2> {nametag.greeting} </h2>
        <h1>
          {nametag.name} 
        </h1>
        <button name="edit" onClick={onEdit}>Update Nametag</button>
      </Fragment>
    );
  }
}
 
export default connect(
  null,
  { add, update }
)(Display);




