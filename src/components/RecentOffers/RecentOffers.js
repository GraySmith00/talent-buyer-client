import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RecentOffers.css';

class RecentOffers extends Component {
  render() {
    const { offers, openEditOfferModal } = this.props;
    let displayOffers;

    if (!offers) {
      displayOffers = <p>Loading...</p>;
    } else {
      displayOffers = [...offers]
        .slice(0, 5)
        .reverse()
        .map(offer => (
          <div className="table-row" key={offer.id}>
            <h3>{offer.date}</h3>
            <h3>{offer.artist_name}</h3>
            <h3>{offer.status}</h3>
            <button
              className="view-offer-button"
              onClick={() => openEditOfferModal(offer.id)}
            >
              View Offer
            </button>
          </div>
        ));
    }

    return (
      <div className="recent-offers">
        <h2>Recent Offers</h2>
        <div className="recent-table-headings">
          <h3>Date</h3>
          <h3>Artist</h3>
          <h3>Status</h3>
          <h3>Offer</h3>
        </div>
        <div className="offers-container">{displayOffers}</div>
      </div>
    );
  }
}

RecentOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  openEditOfferModal: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  offers: state.offers
});

export default connect(mapStateToProps)(RecentOffers);
