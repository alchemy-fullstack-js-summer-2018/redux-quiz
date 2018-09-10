import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameTagForm extends Component {

  state = {
    greeting: 'Hello',
    name: ''
  };

  static propTypes = {
    nametag: PropTypes.object,
    onComplete: PropTypes.func.isRequired
  };

  componedDidMount() {
    const { nametag } = this.props;
    if(!nametag) return;

    this.setState(nametag);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { greeting, name } = this.state;
    const nametag = { greeting, name };
    
    this.props.onComplete(nametag);
    this.setState({ greeting: '', name: ' ' });
  };

  render() {
    const { greeting, name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="greeting" value={greeting} onChange={this.handleChange}/>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <p>
          <button type="submit">Add</button>
          
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);
 
export default NameTagForm;
