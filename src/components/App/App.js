import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <h1>Talent Buyer App!!!</h1>
        </Router>
      </div>
    );
  }
}

export default App;
