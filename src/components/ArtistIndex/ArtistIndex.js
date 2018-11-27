import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Select from 'react-select';
import { PrefixTrie } from 'complete-me';

import { getAllArtists } from '../../Utils/backendApiCalls';
import { toggleArtistThunk } from '../../actions/watchlistActions';
import { allGenres } from '../../Utils/allGenres';
import { capitalize, capitalizeArtists } from '../../Utils/capitalize';
import { ArtistTableHeader } from '../ArtistTableHeader/ArtistTableHeader';
import './ArtistIndex.css';

import Nav from '../Nav/Nav';

const agencyOptions = [
  { value: 'All Agencies', label: 'All Agencies' },
  { value: 'wme', label: 'WME' },
  { value: 'caa', label: 'CAA' }
];

const genreOptions = allGenres.map(genre => ({
  value: genre,
  label: capitalize(genre)
}));

export class ArtistIndex extends Component {
  state = {
    artists: [],
    sort: null,
    genre: null,
    agency: null,
    activeSort: null,
    artistTrie: {},
    autoCompleteResults: [],
    searchValue: '',
    searchedArtist: null,
    showDatalist: false
  };

  async componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    const artists = await getAllArtists({
      agency: 'wme',
      sort: this.state.sort
    });
    const artistTrie = new PrefixTrie();
    const artistNames = artists.map(a => a.name);
    artistTrie.populate(artistNames);
    this.setState({ artists, artistTrie });
  }

  toggleWatchlist = async (e, artist) => {
    e.preventDefault();
    const { watchlist, toggleArtistThunk } = this.props;
    await toggleArtistThunk({ artist, watchlist });
  };

  setAgency = async selectedOption => {
    let agency = selectedOption.value;
    if (selectedOption === 'All Agencies') {
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

  setGenre = async selectedOption => {
    let genre = selectedOption.value;
    if (selectedOption.value === 'All Genres') {
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
    const { agency, genre } = this.state;
    const artists = await getAllArtists({
      sort,
      agency,
      genre
    });
    this.setState({ artists, sort, activeSort: innerText });
  };

  handleSearchChange = e => {
    const { artistTrie } = this.state;
    let searchMatches;
    if (e.target.value === '') {
      searchMatches = [];
    } else {
      searchMatches = artistTrie.suggest(e.target.value);
    }

    const autoCompleteResults = capitalizeArtists(searchMatches);

    if (!autoCompleteResults) {
      this.setState({
        searchValue: '',
        autoCompleteResults: [],
        showDatalist: false
      });
      return;
    }

    const showDatalist = autoCompleteResults.length > 0;
    this.setState({
      autoCompleteResults,
      searchValue: e.target.value,
      showDatalist
    });
  };

  handleSuggestionClick = e => {
    this.setState({ searchValue: e.target.value, showDatalist: false });
  };

  handlSearchSubmit = e => {
    e.preventDefault();
    const { artists, searchValue } = this.state;
    const searchedArtist = artists.find(artist => {
      return artist.name.toLowerCase() === searchValue.toLowerCase();
    });
    const autoCompleteResults = [];
    const showDatalist = false;
    this.setState({ searchedArtist, autoCompleteResults, showDatalist });
  };

  displayArtists = () => {
    const { artists, searchedArtist } = this.state;
    const { watchlist } = this.props;
    let artistsToDisplay = artists;
    let displayArtists;

    if (!artists.length) {
      displayArtists = <p>Loading...</p>;
    } else {
      if (searchedArtist) artistsToDisplay = [searchedArtist];

      displayArtists = artistsToDisplay.map(artist => {
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
            <i
              className={classNames({
                'far fa-square': !onList,
                'fas fa-check-square': onList
              })}
              style={{ color: '#fff', fontSize: '2rem' }}
              onClick={e => {
                e.preventDefault();
                this.toggleWatchlist(e, artist);
              }}
            />
          </Link>
        );
      });
    }

    return displayArtists;
  };

  allArtists = () => {
    this.setState({ searchedArtist: null });
  };

  render() {
    const {
      activeSort,
      agency,
      genre,
      searchValue,
      autoCompleteResults,
      showDatalist
    } = this.state;

    const suggestionOptions = autoCompleteResults.map((suggestion, i) => (
      <option
        onClick={this.handleSuggestionClick}
        key={`${suggestion}-${i}`}
        value={suggestion}
        style={{
          fontSize: '1.2rem',
          padding: '0.5rem 1rem',
          borderBottom: '1px solid #32333e'
        }}
      >
        {suggestion}
      </option>
    ));

    const displayArtists = this.displayArtists();

    return (
      <div className="artist-index">
        <Nav />
        <div className="main-content">
          <section className="search">
            <div className="search-input-container">
              <input
                type="text"
                className="search-input"
                onChange={this.handleSearchChange}
                value={searchValue}
                placeholder="Search for an artist..."
              />
              {showDatalist && (
                <datalist id="suggestions">{suggestionOptions}</datalist>
              )}
            </div>
            <button onClick={this.handlSearchSubmit}>Search</button>
            <button onClick={this.allArtists}>All Artists</button>
          </section>
          <section className="filters">
            <form className="agency-form">
              <label>
                <h3 style={{ fontSize: '1.3rem' }}>Agency</h3>
                <Select
                  options={agencyOptions}
                  value={agency}
                  onChange={this.setAgency}
                  className="select"
                />
              </label>
            </form>
            <form className="genre-form">
              <label>
                <h3 style={{ fontSize: '1.3rem' }}>Genre</h3>
                <Select
                  options={genreOptions}
                  value={genre}
                  onChange={this.setGenre}
                  className="select"
                />
              </label>
            </form>
          </section>
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
