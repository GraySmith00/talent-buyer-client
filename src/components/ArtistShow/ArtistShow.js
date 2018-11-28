import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getArtist } from '../../Utils/backendApiCalls';
import { getLastFMInfo } from '../../Utils/lastFM/lastFMApiCalls';
import './ArtistShow.css';
import ArtistMediaPlayer from '../artistInfoCommon/ArtistMediaPlayer/ArtistMediaPlayer';
import Nav from '../Nav/Nav';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import VenueHistory from '../artistInfoCommon/VenueHistory/VenueHistory';

export class ArtistShow extends Component {
  state = {
    artist: {}
  };

  async componentDidMount() {
    const { id } = this.props;
    const artist = await getArtist(id);
    const lastFMInfo = await getLastFMInfo(artist.name);

    this.setState({
      artist: {
        ...artist,
        ...lastFMInfo
      }
    });
  }

  cleanName = name => {
    const trimSpace = name.replace(/ /g, '');
    return trimSpace;
  };

  render() {
    const { artist } = this.state;
    const { currentVenue } = this.props;
    const {
      name,
      image,
      bio,
      spotify_followers,
      genres,
      similarArtists,
      spotify_url
    } = this.state.artist;

    let displayGenres;
    let similarArtistDisplay;
    let displayArtist;

    if (!similarArtists || !genres) {
      displayArtist = <LoadingSpinner />;
      displayGenres = <LoadingSpinner />;
      similarArtistDisplay = <LoadingSpinner />;
    } else {
      displayGenres = genres.map((genre, index) => (
        <p className="genre" key={genre + index}>
          {genre.name}
        </p>
      ));

      similarArtistDisplay = similarArtists.map((artist, index) => (
        <p className="similar" key={`${artist.name}-${index}`}>
          {artist.name}
        </p>
      ));
      displayArtist = (
        <Fragment>
          <div className="portrait-wrap">
            <div className="profile-frame">
              <img className="profile-image" src={image} alt="artist-profile" />
            </div>
            <div className="stat-wrap">
              <span className="name-wrap">
                <h1 className="artist-name">{name}</h1>
                <span className="button-wrap">
                  <a
                    href={spotify_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="spotify-icon button"
                      src={require('./Spotify_Icon_RGB_White.png')}
                      alt="spotify"
                    />
                  </a>
                  <Link to={`/artists`}>
                    <img
                      className="back-button button"
                      src={require('./back.svg')}
                      alt="back"
                    />
                  </Link>
                </span>
              </span>
              <div className="description-stats">
                <span className="followers-wrap">
                  <h3>Spotify Followers:</h3>
                  <p className="followers">{spotify_followers}</p>
                </span>
                <span className="genre-wrap">
                  <h3 className="genres">Genres:</h3>
                  {displayGenres}
                </span>
                <span className="similar-wrap">
                  <h3 className="similar-artists">Similar Artists:</h3>
                  {similarArtistDisplay}
                </span>
              </div>
            </div>
          </div>
          <p className="bio">{bio}</p>
          <ArtistMediaPlayer name={this.cleanName(name)} />
          <VenueHistory artist={artist} currentVenue={currentVenue} />
        </Fragment>
      );
    }

    return (
      <div className="artist-show">
        <Nav />
        <div className="main-content-frame">
          <div className="main-content">{displayArtist}</div>
        </div>
      </div>
    );
  }
}

ArtistShow.propTypes = {
  currentVenue: PropTypes.object
};

export const mapStateToProps = state => ({
  currentVenue: state.currentVenue
});

export default connect(mapStateToProps)(ArtistShow);
