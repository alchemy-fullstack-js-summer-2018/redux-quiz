import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {

  state = {
    editing: false,
    key: null,
    name: '',
    greeting: ''
  };

  static propTypes = {
    onComplete: PropTypes.object,
    onCancel: PropTypes.func

  };

  componentDidMount() {

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, greeting, key } = this.state;
    

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key } = this.state;
    const {onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value="name" onChange={this.handleChange}/>
        <InputControl name="greeting" value="greeting" onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add'}</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
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

export default Controls;