import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { getArtistInfo } from '../../Utils/songKickApiCalls';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const artistInfo = await getArtistInfo('justice', 'WME');
    console.log(artistInfo);
  }

  render() {
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
}

export default App;
