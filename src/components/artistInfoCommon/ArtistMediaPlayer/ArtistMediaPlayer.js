import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './ArtistMediaPlayer.css';

class ArtistMediaPlayer extends Component {
  state = {
    artistName: ''
  };

  render() {
    return (
      <div className="artist-media-player">
        <ReactPlayer
          height="10em"
          url={`https://soundcloud.com/${this.props.name}`}
          playing
        />
      </div>
    );
  }
}

ArtistMediaPlayer.propTypes = {
  name: PropTypes.string.isRequired
};

export default ArtistMediaPlayer;
