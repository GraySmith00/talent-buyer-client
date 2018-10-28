import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserVenue } from '../../actions/venueActions';
import { logInUser } from '../../actions/userActions';

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
    if (loggedInUser && userVenue) {
      this.props.history.push('/home');
    }
  };

  render() {
    const { closeLogInModal } = this.props;
    return (
      <div className="log-in">
        <InnerModal>
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
              type="text"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <ModalButton>Submit</ModalButton>
            <p onClick={closeLogInModal} className="close-text">
              x Cancel
            </p>
          </ModalForm>
        </InnerModal>
      </div>
    );
  }
}

LogIn.propTypes = {
  closeLogInModal: PropTypes.func.isRequired,
  logInUser: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  logInUser: userCreds => dispatch(logInUser(userCreds)),
  setUserVenue: userId => dispatch(setUserVenue(userId))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LogIn)
);
