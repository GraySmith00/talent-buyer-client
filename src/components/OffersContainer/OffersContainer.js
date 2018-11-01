import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './OffersContainer.css';

export class OffersContainer extends Component {
  formatDate = date => {
    let day = date.getDate();
    if (day < 10) day = `0${day}`;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  handleViewOffer = id => {
    this.props.openEditOfferModal(id);
  };

  render() {
    const { offers, date } = this.props;
    const formattedDate = this.formatDate(date);

    const filteredOffers = offers.filter(offer => offer.date === formattedDate);

    let displayOffers;

    if (filteredOffers.length) {
      displayOffers = filteredOffers.map(offer => (
        <div className="table-row" key={offer.id}>
          <h3>{offer.artist_name}</h3>
          <h3>{offer.status}</h3>
          <button
            className="view-offer-button"
            onClick={() => this.handleViewOffer(offer.id)}
          >
            View Offer
          </button>
        </div>
      ));
    }

    return <div className="offers-container">{displayOffers}</div>;
  }
}

OffersContainer.propTypes = {
  offers: PropTypes.array.isRequired,
  date: PropTypes.object.isRequired,
  openEditOfferModal: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  offers: state.offers
});

export default connect(mapStateToProps)(OffersContainer);
