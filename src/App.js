import React, { Component } from 'react';
import './App.css';

import ComponentToBeTested from './components/ComponentToBeTested'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentToBeTested />
      </div>
    );
  }
}

export default App;
