import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OfferModal.css';

class OfferModal extends Component {
  state = {
    status: '',
    artist: '',
    guarantee: 5000,
    bonuses: '+$1k at 600 sold',
    radiusClause: '120mi +/- 60days',
    totalExpenses: 2000,
    grossPotential: 8500,
    doorTimes: '9pm-12am',
    ageRange: '16+',
    merchSplit: '80/20 artist/venue'
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit;

  render() {
    const { closeOfferModal } = this.props;
    return (
      <div className="offer-modal">
        <div className="inner-modal">
          <form className="offer-form" onSubmit={this.handleSubmit}>
            <div className="input-column-1">
              <div className="select-wrapper">
                <label>
                  <h4>Status</h4>
                  <select name="status" onChange={this.handleChange}>
                    <option value="active">active</option>
                    <option value="pending">pending</option>
                    <option value="confirmed">confirmed</option>
                  </select>
                </label>
              </div>
              <label>
                <h4>Artist</h4>
                <input
                  type="text"
                  name="artist"
                  value={this.state.artist}
                  placeholder="artist"
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
                  name="radiusClause"
                  value={this.state.radiusClause}
                  placeholder="Radius Clause"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Total Expenses</h4>
                <input
                  type="number"
                  name="totalExpenses"
                  value={this.state.totalExpenses}
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
                  name="grossPotential"
                  value={this.state.grossPotential}
                  placeholder="Gross Potential"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Door Times</h4>
                <input
                  type="text"
                  name="doorTimes"
                  value={this.state.doorTimes}
                  placeholder="Door Times"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Ages</h4>
                <input
                  type="text"
                  name="ageRange"
                  value={this.state.ageRange}
                  placeholder="Age Range"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <h4>Merch Split</h4>
                <input
                  type="text"
                  name="merchSplit"
                  value={this.state.merchSplit}
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
  closeOfferModal: PropTypes.func.isRequired
};

export default OfferModal;
