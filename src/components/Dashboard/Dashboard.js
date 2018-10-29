import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

import Nav from '../Nav/Nav';
import OfferModal from '../OfferModal/OfferModal';
import ModalButton from '../styledComponents/ModalButton';

import './Dashboard.css';
import OffersContainer from '../OffersContainer/OffersContainer';
import EditOfferModal from '../EditOfferModal/EditOfferModal';

class Dashboard extends Component {
  state = {
    date: new Date(),
    offerModalOpen: false,
    editOfferModalOpen: false,
    editOfferId: ''
  };

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
  }

  handleDateChange = date => this.setState({ date });
  openOfferModal = () => this.setState({ offerModalOpen: true });
  closeOfferModal = () => this.setState({ offerModalOpen: false });
  openEditOfferModal = id => {
    this.setState({ editOfferModalOpen: true, editOfferId: id });
  };
  closeEditOfferModal = () => this.setState({ editOfferModalOpen: false });

  render() {
    const {
      offerModalOpen,
      date,
      editOfferId,
      editOfferModalOpen
    } = this.state;
    const dateString = date.toString().slice(0, 15);

    return (
      <div className="dashboard">
        {offerModalOpen && (
          <OfferModal closeOfferModal={this.closeOfferModal} date={date} />
        )}
        {editOfferModalOpen && (
          <EditOfferModal
            offerId={editOfferId}
            closeEditOfferModal={this.closeEditOfferModal}
          />
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
              <h2>{dateString}</h2>
              <ModalButton
                className="create-offer-button"
                onClick={this.openOfferModal}
              >
                <i className="fas fa-plus" />
                Create Offer
              </ModalButton>
              <div className="table-headings">
                <h3>Artist</h3>
                <h3>Status</h3>
                <h3>Offer</h3>
              </div>
              <OffersContainer
                date={date}
                openEditOfferModal={this.openEditOfferModal}
              />
            </div>
          </div>
          <div className="recents" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
