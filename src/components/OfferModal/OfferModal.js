import React, { Component } from 'react';
import './OfferModal.css';

class OfferModal extends Component {
  state = {
    status: '',
    artist: '',
    guarantee: 0,
    bonuses: 0,
    radiusClause: '',
    totalExpenses: 0,
    grossPotential: 0,
    doorTimes: 0,
    ageRange: 0,
    merchSplit: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="offer-form">
        <h1>Offer Form</h1>
        <div className="input-wrapper">
          <h4>Status:</h4>
          <select name="status" onChange={this.handleChange}>
            <option value="active">active</option>
            <option value="pending">pending</option>
            <option value="confirmed">confirmed</option>
          </select>
        </div>
        <div className="input-wrapper">
          <h4>Artist:</h4>
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            placeholder="artist"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Guarantee:</h4>
          <input
            type="number"
            name="guarantee"
            value={this.state.guarantee}
            placeholder="guarantee"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Bonuses:</h4>
          <input
            type="number"
            name="bonuses"
            value={this.state.bonuses}
            placeholder="bonuses"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Radius Clause:</h4>
          <input
            type="text"
            name="radiusClause"
            value={this.state.radiusClause}
            placeholder="Radius Clause"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Total Expenses:</h4>
          <input
            type="number"
            name="totalExpenses"
            value={this.state.totalExpenses}
            placeholder="Total Expenses"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Gross Potential:</h4>
          <input
            type="number"
            name="grossPotential"
            value={this.state.grossPotential}
            placeholder="Gross Potential"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Door Times:</h4>
          <input
            type="number"
            name="doorTimes"
            value={this.state.doorTimes}
            placeholder="Door Times"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Age Range:</h4>
          <input
            type="numer"
            name="ageRange"
            value={this.state.ageRange}
            placeholder="Age Range"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-wrapper">
          <h4>Merch Split:</h4>
          <input
            type="text"
            name="merchSplit"
            value={this.state.merchSplit}
            placeholder="Merch Split"
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default OfferModal;
