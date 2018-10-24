import React, { Component } from 'react';
import './OfferForm.css';

class OfferForm extends Component {
  state = {

  }

  render() {
    return (
      <form className="offer-form">
        <h1>Offer Form</h1>
        <div className="input-wrapper">
          <h4>Status:</h4>
          <select name="status">
            <option value="active">active</option>
            <option value="pending">pending</option>
            <option value="confirmed">confirmed</option>
          </select>
        </div>
        <div className="input-wrapper">
          <h4>Artist:</h4>
          <input type="text" value={this.state.artist} placeholder="artist" />
        </div>
        <div className="input-wrapper">
          <h4>Guarantee:</h4>
          <input type="number" value={this.state.guarantee} placeholder="guarantee" />
        </div>
        <div className="input-wrapper">
          <h4>Bonuses:</h4>
          <input type="number" value={this.state.bonuses} placeholder="bonuses" />
        </div>
        <div className="input-wrapper">
          <h4>Radius Clause:</h4>
          <input type="text" value={this.state.radiusClause} placeholder="Radius Clause" />
        </div>
        <div className="input-wrapper">
          <h4>Total Expenses:</h4>
          <input type="number" value={this.state.totalExpenses} placeholder="Total Expenses" />
        </div>
        <div className="input-wrapper">
          <h4>Gross Potential:</h4>
          <input type="number" value={this.state.grossPotential} placeholder="Gross Potential" />
        </div>
        <div className="input-wrapper">
          <h4>Door Times:</h4>
          <input type="number" value={this.state.doorTimes} placeholder="Door Times" />
        </div>
        <div className="input-wrapper">
          <h4>Age Range:</h4>
          <input type="numer" value={this.state.ageRange} placeholder="Age Range" />
        </div>
        <div className="input-wrapper">
          <h4>Merch Split:</h4>
          <input type="numer" value={this.state.merchSplit} placeholder="Merch Split" />
        </div>

      </form>
    );
  }
}

export default OfferForm;