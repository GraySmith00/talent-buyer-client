import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ArtistShow.css';
import { getArtist } from '../../Utils/backendApiCalls';

class ArtistShow extends Component {
  state = {
    name: '',
    image_url: ''
  };

  async componentDidMount() {
    const { id } = this.props;
    const artist = await getArtist(id);
    this.setState({ name: artist.name, image_url: artist.image_url });
  }

  render() {
    const { name, image_url } = this.state;
    return (
      <div className="artist-show">
        <Nav />
        <div className="main-content">
          <h1>{name}</h1>
          <img className="profile-image" src={image_url} alt="artist-profile" />
        </div>
      </div>
    );
  }
}

export default ArtistShow;
