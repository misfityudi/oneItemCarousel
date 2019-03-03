import React, { Component } from 'react';
import './App.css';
import OneItemCarousel from './components/oneItemCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OneItemCarousel/>
      </div>
    );
  }
}

export default App;
