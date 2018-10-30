import React, { Component } from 'react';
import { getAllArtists } from '../../Utils/backendApiCalls';
import { toggleArtistThunk } from '../../actions/watchlistActions';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../Nav/Nav';

import './ArtistIndex.css';

export class ArtistIndex extends Component {
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

  toggleWatchlist = async (artist) => {
    const { watchlist, toggleArtistThunk } = this.props;

    await toggleArtistThunk({ artist, watchlist });
  }

  render() {
    const { artists } = this.state;
    let displayArtists;

    if (!artists.length) {
      displayArtists = <p>Loading...</p>;
    } else {
      displayArtists = artists.slice(0, 25).map(artist => (
        < div onClick={this.handleClick} key={artist.id} className="artist-listing" >
          <img src={artist.image_url} alt="artist" className="artist-image" />
          <p>{artist.name}</p>
          <p>{artist.agency}</p>
          <p>{artist.popularity}</p>
          <p>{artist.spotify_followers}</p>
          <button onClick={() => this.toggleWatchlist(artist)}>Add</button>
        </div >
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
            <h3 className="watchlist-heading">Watchlist</h3>
          </div>
          <div className="artists-container">{displayArtists}</div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  watchlist: state.watchlist
});

export const mapDispatchToProps = dispatch => ({
  toggleArtistThunk: ({ artist, watchlist }) => dispatch(toggleArtistThunk({ artist, watchlist }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
