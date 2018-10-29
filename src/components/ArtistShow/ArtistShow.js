import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ArtistShow.css';
import { getArtist } from '../../Utils/backendApiCalls';

class ArtistShow extends Component {

  async componentDidMount() {
    const { id } = this.props;
    const artist = await getArtist(id);
    console.log(artist);
  }

  render() {
    return (
      <div className="artist-show">
        <Nav />
        <div className="main-content">
          <h1>Artist Show</h1>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
