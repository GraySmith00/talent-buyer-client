import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ArtistShow.css';
import { getArtist } from '../../Utils/backendApiCalls';
import { getArtistDetails } from '../../Utils/songKickApiCalls';

class ArtistShow extends Component {
  state = {
    name: '',
    image_url: '',
    bio: '',
    genres: [],
    similarArtists: []
  };

  async componentDidMount() {
    const { id } = this.props;
    const artist = await getArtist(id);
    const artistDetails = await getArtistDetails(artist.name);
    const cleanArtist = await this.formatArtist(artistDetails);
    this.setState({
      name: artist.name,
      image_url: cleanArtist.image,
      bio: cleanArtist.bio,
      spotify_followers: artist.spotify_followers,
      genres: cleanArtist.genres,
      similarArtists: cleanArtist.similarArtists
    });
  }

  formatArtist = artist => {
    const imageValues = Object.values(artist.artist.image[3]);
    const image = imageValues[0];

    const bioData = artist.artist.bio.summary.split('<');
    const trimData = bioData[0].trim();
    let bio = bioData[0];

    if (trimData.length < 40) {
      bio = 'Artist biography unavailable';
    }

    const genres = artist.artist.tags.tag.splice(0, 4);
    const similarArtists = artist.artist.similar.artist.splice(0, 4);
    const formattedArtist = {
      bio,
      image,
      genres,
      similarArtists
    };
    return formattedArtist;
  };

  render() {
    const {
      name,
      image_url,
      bio,
      spotify_followers,
      genres,
      similarArtists
    } = this.state;

    const displayGenres = genres.map((genre, index) => (
      <p className="genre" key={'genre' + name + index}>
        {genre.name}
      </p>
    ));

    const similarArtistDisplay = similarArtists.map((artist, index) => (
      <p className="similar" key={'simiar' + name + index}>
        {artist.name}
      </p>
    ));

    return (
      <div className="artist-show">
        <Nav />
        <div className="main-content-frame">
          <div className="main-content">
            <div className="portrait-wrap">
              <div className="profile-frame">
                <img
                  className="profile-image"
                  src={image_url}
                  alt="artist-profile"
                />
              </div>
              <div className="stat-wrap">
                <h1 className="artist-name">{name}</h1>
                <span className="followers-wrap">
                  <h3>Spotify Followers:</h3>
                  <p className="followers">{spotify_followers}</p>
                </span>
                <span className="genre-wrap">
                  <h3 className="genres">Genres:</h3>
                  {displayGenres}
                </span>
              </div>
            </div>
            <p className="bio">{bio}</p>
            <span className="similar-wrap">
              <h3 className="similar-artists">Similar Artists:</h3>
              {similarArtistDisplay}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
