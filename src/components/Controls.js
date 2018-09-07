import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getName, getGreeting } from './reducers';
import { greetingChange, nameChange } from './actions';

class Controls extends PureComponent {
  state = {
    greeting: '',
    name: ''
  };

  static propTypes = {
    greeting: PropTypes.string.isRequired,
    greetingChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    nameChange: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    if(name === 'greeting') this.props.greetingChange(value);
    if(name === 'name') this.props.nameChange(value);
  };


  render() {
    const { greeting, name } = this.props;

    return (
      <section>
        <input name="greeting" onChange={this.handleChange} value={greeting}/>
        <input name="name" onChange={this.handleChange} value={name}/>
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