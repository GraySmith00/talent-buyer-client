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
import VenueHistory from '../VenueHistory/VenueHistory';

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

    let displayArtist;

    if (!similarArtists || !genres) {
      displayArtist = <LoadingSpinner />;
    } else {
      displayArtist = (
        <Fragment>
          <section className="profile">
            <img className="profile-image" src={image} alt="artist-profile" />
            <div className="stat-wrap">
              <h1>{name}</h1>
              <span className="stat">
                <h3>Spotify Followers:</h3>
                <p>{spotify_followers}</p>
              </span>
              <span className="stat">
                <h3>Genres:</h3>
                <p>{genres.map(g => g.name).join(', ')}</p>
              </span>
              <span className="stat">
                <h3>Similar Artists:</h3>
                <p>{similarArtists.map(a => a.name).join(', ')}</p>
              </span>
              <div className="social-links">
                <a href={spotify_url} target="_blank" rel="noopener noreferrer">
                  <img src={require('./spotifyIcon.png')} alt="spotify" />
                </a>
                <a href={spotify_url} target="_blank" rel="noopener noreferrer">
                  <img src={require('./soundcloudIcon.png')} alt="spotify" />
                </a>
              </div>
            </div>
          </section>
          <section className="bio">
            <p>{bio}</p>
          </section>
          <section className="media-player">
            <ArtistMediaPlayer name={this.cleanName(name)} />
          </section>
          <section className="venue-history">
            <VenueHistory artist={artist} currentVenue={currentVenue} />
          </section>
        </Fragment>
      );
    }

    return (
      <div className="artist-show">
        <Nav />
        <div className="main-content">
          <Link to={`/artists`}>
            <i className="fas fa-arrow-left" />
          </Link>
          {displayArtist}
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
