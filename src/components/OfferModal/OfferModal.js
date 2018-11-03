import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import { addNewOffer } from '../../actions/offerActions';
import './OfferModal.css';

export class OfferModal extends Component {
  state = {
    status: 'Pending',
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
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      currentUser,
      currentVenue,
      date,
      addNewOffer,
      closeOfferModal
    } = this.props;

    const offer = {
      status: this.state.status.toLowerCase(),
      buyer_id: currentUser.id,
      venue_id: currentVenue.id,
      ...this.state,
      date
    };

    await addNewOffer(offer);
    closeOfferModal();
  };

  render() {
    const { closeOfferModal, date } = this.props;
    const dateString = date.toString().slice(0, 15);
    return (
      <div className="offer-modal">
        <div className="inner-modal">
          <h3>{dateString}</h3>
          <form className="offer-form" onSubmit={this.handleSubmit}>
            <div className="input-column-1">
              <div className="select-wrapper">
                <label>
                  <h4>Status</h4>
                  <select name="status" onChange={this.handleChange}>
                    <option value={'Pending'}>Pending</option>
                    <option value={'Confirmed'}>Confirmed</option>
                    <option value={'Rejected'}>Rejected</option>
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
          <p onClick={closeOfferModal}>x Cancel</p>
        </div>
      </div>
    );
  }
}

OfferModal.propTypes = {
  closeOfferModal: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentVenue: state.currentVenue
});

export const mapDispatchToProps = dispatch => ({
  addNewOffer: offer => dispatch(addNewOffer(offer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferModal);
