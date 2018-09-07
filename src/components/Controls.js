import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nametag extends Component {

  state = { 
    editing: false,
    key: null,
    greeting: '',
    name: ''
  };

  static propTypes = {
    nametag: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { nametag } = this.props;
    if(!nametag) return;

    this.setState(nametag);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, greeting, key } = this.state;
    const nametag = { name, greeting };
    if(key) nametag.key = key;

    this.props.onComplete(nametag);
    this.setState({ name: '', greeting: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, greeting, key } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="greeting" value={greeting} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
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
 
export default Nametag;