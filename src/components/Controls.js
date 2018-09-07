import React, { Component } from 'react';

class Control extends Component {
  render() { 
    return ( 
      <form onSubmit={}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}
 
export default Control;