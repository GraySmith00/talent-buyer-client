import React, { Component } from 'react';
import { getAllArtists } from '../../Utils/backendApiCalls';
import axios from 'axios';
import Nav from '../Nav/Nav';

import './ArtistIndex.css';

class ArtistIndex extends Component {
  state = {
    artists: []
  };

  async componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    const artists = await getAllArtists();
    this.setState({ artists });
  }

  render() {
    const { artists } = this.state;
    let displayArtists;

    if (!artists.length) {
      displayArtists = <p>Loading...</p>;
    } else {
      displayArtists = artists.slice(0, 25).map(artist => (
        <div key={artist.id} className="artist-listing">
          <img src={artist.image_url} alt="artist" className="artist-image" />
          <p>{artist.name}</p>
          <p>{artist.agency}</p>
          <p>{artist.popularity}</p>
          <p>{artist.spotify_followers}</p>
        </div>
      ));
    }

    return (
      <div className="artist-index">
        <Nav />
        <div className="main-content">
          <div className="table-headings">
            <h3>Image</h3>
            <h3>Name</h3>
            <h3>Agency</h3>
            <h3>Popularity</h3>
            <h3>Spotify Followers</h3>
          </div>
          <div className="artists-container">{displayArtists}</div>
        </div>
      </div>
    );
  }
}

export default ArtistIndex;
