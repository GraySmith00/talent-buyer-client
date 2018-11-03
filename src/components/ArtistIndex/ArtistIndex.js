import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getAllArtists } from '../../Utils/backendApiCalls';
import { toggleArtistThunk } from '../../actions/watchlistActions';
import { connect } from 'react-redux';
import axios from 'axios';
import { allGenres } from '../../Utils/allGenres';
import { capitalize } from '../../Utils/capitalize';
import ArtistTableHeader from '../ArtistTableHeader/ArtistTableHeader';
import './ArtistIndex.css';

import Nav from '../Nav/Nav';

export class ArtistIndex extends Component {
  state = {
    artists: [],
    sort: null,
    genre: null,
    agency: null,
    activeSort: null
  };

  async componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    const artists = await getAllArtists({
      agency: 'wme',
      sort: this.state.sort
    });
    this.setState({ artists });
  }

  toggleWatchlist = async (e, artist) => {
    e.preventDefault();
    e.stopPropagation();
    const { watchlist, toggleArtistThunk } = this.props;

    await toggleArtistThunk({ artist, watchlist });
  };

  setAgency = async e => {
    let agency = e.target.value;
    if (e.target.value === 'All Agencies') {
      agency = null;
    }
    const { genre, sort } = this.state;
    const artists = await getAllArtists({
      sort,
      agency,
      genre
    });
    this.setState({ artists, agency });
  };

  setGenre = async e => {
    let genre = e.target.value;
    if (e.target.value === 'All Genres') {
      genre = null;
    }
    const { agency, sort } = this.state;
    const artists = await getAllArtists({
      sort,
      agency,
      genre
    });
    this.setState({ artists, genre });
  };

  setSort = async (sort, e) => {
    const { innerText } = e.target;
    console.log(innerText);
    const { agency, genre } = this.state;
    const artists = await getAllArtists({
      sort,
      agency,
      genre
    });
    this.setState({ artists, sort, activeSort: innerText });
  };

  render() {
    const { artists, activeSort } = this.state;
    const { watchlist } = this.props;
    let displayArtists;

    if (!artists.length) {
      displayArtists = <p>Loading...</p>;
    } else {
      displayArtists = artists.map(artist => {
        let onList = watchlist.find(watched => watched.id === artist.id);
        onList ? (onList = true) : (onList = false);

        return (
          <Link
            to={`/artists/${artist.id}`}
            key={artist.id}
            className="artist-listing"
          >
            <img src={artist.image_url} alt="artist" className="artist-image" />
            <p>{artist.name}</p>
            <p>{artist.agency}</p>
            <p>{artist.popularity}</p>
            <p>{artist.spotify_followers}</p>
            <input
              type="checkbox"
              checked={onList}
              className="checkbox-input"
              onClick={e => this.toggleWatchlist(e, artist)}
            />
          </Link>
        );
      });
    }

    let displayGenres = allGenres.map(genre => (
      <option key={genre} value={genre}>
        {capitalize(genre)}
      </option>
    ));

    return (
      <div className="artist-index">
        <Nav />
        <div className="main-content">
          <form className="agency-form">
            <label>
              Agency
              <select onChange={this.setAgency}>
                <option value="All Agencies">All Agencies</option>
                <option value="caa">CAA</option>
                <option value="wme">WME</option>
              </select>
            </label>
          </form>
          <form className="genre-form">
            <label>
              Genre
              <select className="genre-selector" onChange={this.setGenre}>
                <option value={null}>All Genres</option>
                {displayGenres}
              </select>
            </label>
          </form>
          <div className="table-headings">
            <h3>Image</h3>
            <ArtistTableHeader
              activeSort={activeSort}
              onClick={event => this.setSort('alphabetical', event)}
              category="Name"
              name="Name"
            />
            <ArtistTableHeader
              activeSort={activeSort}
              onClick={event => this.setSort('agency', event)}
              category="Agency"
              name="Agency"
            />
            <ArtistTableHeader
              activeSort={activeSort}
              onClick={event => this.setSort('popularity', event)}
              category="Popularity"
              name="Popularity"
            />
            <ArtistTableHeader
              activeSort={activeSort}
              onClick={event => this.setSort('popularity', event)}
              category="Spotify Followers"
              name="Spotify Followers"
            />
            <h3 className="watchlist-heading">Watchlist</h3>
          </div>
          <div className="artists-container">{displayArtists}</div>
        </div>
      </div>
    );
  }
}

ArtistIndex.propTypes = {
  watchlist: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  watchlist: state.watchlist
});

export const mapDispatchToProps = dispatch => ({
  toggleArtistThunk: ({ artist, watchlist }) =>
    dispatch(toggleArtistThunk({ artist, watchlist }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
