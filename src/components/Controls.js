import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getName, getGreeting } from './reducers';
import { greetingChange, nameChange } from './actions';

class Controls extends PureComponent {

  static propTypes = {
    greeting: PropTypes.string.isRequired,
    greetingChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    nameChange: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { greetingChange, nameChange } = this.props;
    if(name === 'greeting') greetingChange(value);
    if(name === 'name') nameChange(value);
  };


  render() {
    const { greeting, name } = this.props;

    return (
      <section className="controls">
        <label>
          Greeting:
          <input name="greeting" onChange={this.handleChange} value={greeting}/>
        </label>
        <label>
          Name:
          <input name="name" onChange={this.handleChange} value={name}/>
        </label>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    name: getName(state),
    greeting: getGreeting(state)
  }),
  { greetingChange, nameChange }
)(Controls);