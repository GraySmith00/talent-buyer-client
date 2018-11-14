import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserVenue } from '../../actions/venueActions';
import { logInUser } from '../../actions/userActions';
import { populateUserOffers } from '../../actions/offerActions';
import { populateUserWatchlist } from '../../actions/watchlistActions';

import ModalButton from '../styledComponents/ModalButton';
import InputField from '../styledComponents/InputField';
import ModalForm from '../styledComponents/ModalForm';
import InnerModal from '../styledComponents/InnerModal';
import './LogIn.css';

export class LogIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleModal = () => {
    this.props.closeLogInModal();
    this.props.openSignUpModal();
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const userCreds = {
      buyer: {
        email,
        password
      }
    };
    const loggedInUser = await this.props.logInUser(userCreds);
    const userVenue = await this.props.setUserVenue(loggedInUser.id);
    await this.props.populateUserOffers(loggedInUser.id);
    await this.props.populateUserWatchlist();

    if (loggedInUser && userVenue) {
      this.props.history.push('/home');
    }
  };

  render() {
    return (
      <div className="log-in">
        <InnerModal className="login-modal">
          <div className="top-container">
            <div className="top-inner">
              <h3 className="header-text">Welcome to Talent Buyer!</h3>
            </div>
          </div>
          <ModalForm className="log-in-form" onSubmit={this.handleSubmit}>
            <p>Log In With Email</p>
            <InputField
              type="email"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange}
            />
            <InputField
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <ModalButton>Submit</ModalButton>
            <p onClick={this.toggleModal} className="close-text">
              Need to Sign Up?
            </p>
          </ModalForm>
        </InnerModal>
      </div>
    );
  }
}

LogIn.propTypes = {
  closeLogInModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func,
  logInUser: PropTypes.func.isRequired,
  setUserVenue: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  populateUserOffers: PropTypes.func.isRequired,
  populateUserWatchlist: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  logInUser: userCreds => dispatch(logInUser(userCreds)),
  setUserVenue: userId => dispatch(setUserVenue(userId)),
  populateUserOffers: userId => dispatch(populateUserOffers(userId)),
  populateUserWatchlist: () => dispatch(populateUserWatchlist())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LogIn)
);
