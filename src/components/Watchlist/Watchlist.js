import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Watchlist.css';

class Watchlist extends Component {
  render() {
    const { watchlist } = this.props;
    let displayArtists;

    if (!watchlist) {
      displayArtists = <p>Loading...</p>;
    } else {
      displayArtists = watchlist.map(artist => (
        <div className="table-row" key={artist.id}>
          <img src={artist.image_url} alt="artist" className="artist-image" />
          <h3>{artist.name}</h3>
          <h3>{artist.agency}</h3>
          <h3>{artist.popularity}</h3>
        </div>
      ));
    }

    return (
      <div className="watchlist">
        <h2>Watchlist</h2>
        <div className="recent-table-headings">
          <h3>Image</h3>
          <h3>Artist</h3>
          <h3>Agency</h3>
          <h3>Popularity</h3>
        </div>
        <div className="offers-container">{displayArtists}</div>
      </div>
    );
  }
}

Watchlist.propTypes = {
  offers: PropTypes.array.isRequired,
  openEditOfferModal: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  watchlist: state.watchlist
});

export default connect(mapStateToProps)(Watchlist);
