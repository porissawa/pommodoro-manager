import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Counter from './components/Counter'
import Objective from './components/Objective'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Objective />
        <Counter />
        <Button />
      </div>
    );
  }
}

export default App;
