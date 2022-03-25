import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Formulaire/>
      </div>
    );
  }
}

export default App;
