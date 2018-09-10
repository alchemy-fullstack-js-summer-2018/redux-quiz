import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <div>
            <h1>Hello Redux Quiz!</h1>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Redirect to ="/"/>
            </Switch>
          </div>
        </Fragment>
      </Router>

    );
  }
}

export default App;