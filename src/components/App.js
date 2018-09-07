import React, { Component } from 'react';
import Display from './Display';

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/display" component={Display}/>
              <Redirect to="/"/>
            </Switch>
      </Router>
      <div>Hello Redux Quiz!</div>
      
    );
  }
}

export default App;