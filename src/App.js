import React, { Component } from 'react';

import './App.css';

import GiphyApp from "./components/giphy-react-Api/GiphyApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GiphyApp/>
      </div>
    );
  }
}

export default App;
