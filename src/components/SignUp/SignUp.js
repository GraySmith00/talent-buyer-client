import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { registerUser } from '../../thunks/registerUser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    venueName: '',
    venueCity: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const savedUser = await this.saveUser();
    if (savedUser) {
      this.props.history.push('/home');
    }
  };

  saveUser = async () => {
    const { firstName, lastName, email, password } = this.state;
    const user = {
      buyer: {
        first_name: firstName,
        last_name: lastName,
        email,
        password
      }
    };
    return await this.props.registerUser(user);
  };

  render() {
    const { closeSignUpModal } = this.props;
    return (
      <form className="sign-up" onSubmit={this.handleSubmit}>
        <div className="inner-modal">
          <h1>Sign Up</h1>
          <div className="input-wrapper">
            <h4>First Name:</h4>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="first name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-wrapper">
            <h4>Last Name:</h4>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="last name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-wrapper">
            <h4>Email:</h4>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-wrapper">
            <h4>Password:</h4>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-wrapper">
            <h4>Venue Name:</h4>
            <input
              type="text"
              name="venueName"
              value={this.state.venueName}
              placeholder="Venue Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-wrapper">
            <h4>Venue City:</h4>
            <input
              type="text"
              name="venueCity"
              value={this.state.venueCity}
              placeholder="Venue City"
              onChange={this.handleChange}
            />
          </div>
          <button>SUBMIT</button>
          <button>Log In</button>
          <p onClick={closeSignUpModal}>x</p>
        </div>
      </form>
    );
  }
}

SignUp.propTypes = {
  closeSignUpModal: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignUp)
);
