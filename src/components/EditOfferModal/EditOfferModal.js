import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import { editExistingOffer } from '../../actions/offerActions';
import './EditOfferModal.css';

export class EditOfferModal extends Component {
  state = {
    status: 'pending',
    artist_name: '',
    guarantee: 5000,
    bonuses: '+$1k at 600 sold',
    radius_clause: '120mi +/- 60days',
    total_expenses: 2000,
    gross_potential: 8500,
    door_times: '9pm-12am',
    age_range: '16+',
    merch_split: '80/20 artist/venue'
  };

  componentDidMount() {
    const { offerId, offers } = this.props;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    const offer = offers.find(offer => offer.id === offerId);
    const {
      status,
      artist_name,
      guarantee,
      bonuses,
      radius_clause,
      total_expenses,
      gross_potential,
      door_times,
      age_range,
      merch_split
    } = offer;
    this.setState({
      status,
      artist_name,
      guarantee,
      bonuses,
      radius_clause,
      total_expenses,
      gross_potential,
      door_times,
      age_range,
      merch_split
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      closeEditOfferModal,
      offerId,
      offers,
      editExistingOffer
    } = this.props;

    const offer = offers.find(offer => offer.id === offerId);

    const newOffer = {
      ...offer,
      ...this.state
    };

    await editExistingOffer(newOffer);
    closeEditOfferModal();
  };

  render() {
    const { closeEditOfferModal } = this.props;
    const { status } = this.state;

    return (
      <div className="edit-offer-modal">
        <div className="inner-modal">
          <form className="offer-form" onSubmit={this.handleSubmit}>
            <div className="input-column-1">
              <div className="select-wrapper">
                <label>
                  <h4>Status</h4>
                  <select
                    name="status"
                    onChange={this.handleChange}
                    value={status}
                  >
                    <option value={'pending'}>Pending</option>
                    <option value={'confirmed'}>Confirmed</option>
                    <option value={'rejected'}>Rejected</option>
                  </select>
                </label>
              </div>
              <label>
                <h4>Artist</h4>
                <input
                  type="text"
                  name="artist_name"
                  value={this.state.artist_name}
                  placeholder="artist_name"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Guarantee</h4>
                <input
                  type="number"
                  name="guarantee"
                  value={this.state.guarantee}
                  placeholder="guarantee"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Bonuses</h4>
                <input
                  type="text"
                  name="bonuses"
                  value={this.state.bonuses}
                  placeholder="bonuses"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Radius Clause</h4>
                <input
                  type="text"
                  name="radius_clause"
                  value={this.state.radius_clause}
                  placeholder="Radius Clause"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Total Expenses</h4>
                <input
                  type="number"
                  name="total_expenses"
                  value={this.state.total_expenses}
                  placeholder="Total Expenses"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="input-column-2">
              <label>
                <h4>Gross Potential</h4>
                <input
                  type="number"
                  name="gross_potential"
                  value={this.state.gross_potential}
                  placeholder="Gross Potential"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Door Times</h4>
                <input
                  type="text"
                  name="door_times"
                  value={this.state.door_times}
                  placeholder="Door Times"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Ages</h4>
                <input
                  type="text"
                  name="age_range"
                  value={this.state.age_range}
                  placeholder="Age Range"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Merch Split</h4>
                <input
                  type="text"
                  name="merch_split"
                  value={this.state.merch_split}
                  placeholder="Merch Split"
                  onChange={this.handleChange}
                />
              </label>
              <button>Submit</button>
            </div>
          </form>
          <p onClick={closeEditOfferModal}>x Cancel</p>
        </div>
      </div>
    );
  }
}

EditOfferModal.propTypes = {
  closeEditOfferModal: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentVenue: state.currentVenue,
  offers: state.offers
});

export const mapDispatchToProps = dispatch => ({
  editExistingOffer: offer => dispatch(editExistingOffer(offer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditOfferModal);
