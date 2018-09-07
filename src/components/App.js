import React, { PureComponent } from 'react';
import Controls from './Controls';
import Display from './Display';
import styles from './App.css';

class App extends PureComponent {

  render() {

    return (
      <div className={styles.app}>
        <Controls/>
        <Display/>
      </div>
    );
  }
}

export default App;