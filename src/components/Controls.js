import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGreeting, changeName } from './actions';
import { getGreeting, getName } from './reducers';

class Controls extends PureComponent {

  static propTypes = {
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };


  render() {

    const { name, greeting } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:&nbsp;
            <input name="name" value={name} onChange={changeGreeting}></input>
          </label>
          <label>
            Greeting:&nbsp;
            <input name="greeting" value={greeting} onChange={changeName}></input>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    greeting: getGreeting(state),
    name: getName(state)
  }),
  { changeGreeting, changeName }
)(Controls);