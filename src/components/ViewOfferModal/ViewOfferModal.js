import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import './ViewOfferModal.css';

export class ViewOfferModal extends Component {
  state = {
    offer: {}
  };

  componentDidMount() {
    const { offerId, offers } = this.props;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    const offer = offers.find(offer => offer.id === offerId);
    this.setState({ offer });
  }

  render() {
    const { closeViewOfferModal, currentVenue } = this.props;
    const { offer } = this.state;

    let displayOfferInfo;

    if (!Object.keys(offer).length) {
      displayOfferInfo = <p>Loading...</p>;
    } else {
      displayOfferInfo = (
        <div className="offer-info">
          <p>Artist: {offer.artist_name}</p>
          <p>Guarentee: ${offer.guarantee}</p>
          <p>Venue: {currentVenue.name}</p>
        </div>
      );
    }

    return (
      <div className="offer-modal">
        <div className="inner-modal">
          <h1>ViewOfferModal</h1>
          {displayOfferInfo}
          <p onClick={closeViewOfferModal}>x Cancel</p>
        </div>
      </div>
    );
  }
}

ViewOfferModal.propTypes = {
  closeViewOfferModal: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentVenue: state.currentVenue,
  offers: state.offers
});

export default connect(mapStateToProps)(ViewOfferModal);
