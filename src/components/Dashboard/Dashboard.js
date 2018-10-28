import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

import Nav from '../Nav/Nav';
import OfferModal from '../OfferModal/OfferModal';

import './Dashboard.css';

class Dashboard extends Component {
  state = {
    date: new Date(),
    offerModalOpen: false
  };

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
  }

  handleDateChange = date => this.setState({ date });

  openOfferModal = () => this.setState({ offerModalOpen: true });

  closeOfferModal = () => this.setState({ offerModalOpen: false });

  render() {
    const { offerModalOpen, date } = this.state;

    return (
      <div className="dashboard">
        {offerModalOpen && (
          <OfferModal closeOfferModal={this.closeOfferModal} date={date} />
        )}
        <Nav />
        <div className="main-content">
          <div className="dates">
            <Calendar
              onChange={this.handleDateChange}
              value={this.state.date}
              className="calendar"
            />
            <div className="offers">
              <button
                className="create-offer-button"
                onClick={this.openOfferModal}
              >
                <i className="fas fa-plus" />
                Create Offer
              </button>
              <div className="table-headings">
                <h3>Day</h3>
                <h3>Date</h3>
                <h3>Artist</h3>
                <h3>Status</h3>
                <h3>Offer</h3>
              </div>
              <div className="table-row">
                <h3>Sat</h3>
                <h3>Dec 01 2018</h3>
                <h3>Justice</h3>
                <h3>Pending</h3>
                <button className="view-offer-button">View Offer</button>
              </div>
            </div>
          </div>
          <div className="recents" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
