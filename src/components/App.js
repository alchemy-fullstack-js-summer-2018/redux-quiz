import React, { PureComponent } from 'react';
import Controls from './Controls';
import Display from './Display';


class App extends PureComponent {

  render() {

    return (
      <div>
        <Controls/>
        <Display/>
      </div>
    );
  }
}

export default App;