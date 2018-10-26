import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { getArtistInfo, getSpotifyInfo } from '../../Utils/songKickApiCalls';
import {
  artistPostRequest,
  addWmeArtistsToBackend,
  addCaaArtistsToBackend
} from '../../Utils/backendApiCalls';
import './App.css';

class App extends Component {
  async componentDidMount() {
    // const artistInfo = await getArtistInfo('justice', 'WME');
    // console.log(artistInfo);
    // await addCaaArtistsToBackend();
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
