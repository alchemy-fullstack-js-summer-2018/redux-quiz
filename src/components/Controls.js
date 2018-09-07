import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends PureComponent {
  static propTypes = {

  };

  state = {
    name: '',
    greeting: 'Hello'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { name, greeting } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:&nbsp;
            <input name="name" value={name} onChange={this.handleChange}></input>
          </label>
          <label>
            Greeting:&nbsp;
            <input name="greeting" value={greeting} onChange={this.handleChange}></input>
          </label>
        </form>
      </div>
    );
  }
}
