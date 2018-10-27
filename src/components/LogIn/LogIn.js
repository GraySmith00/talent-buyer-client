import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { logInUser } from '../../actions/userActions';
import { connect } from 'react-redux';
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
    await this.props.logInUser(userCreds);
  };

  render() {
    const { closeLogInModal } = this.props;
    return (
      <form className="log-in" onSubmit={this.handleSubmit}>
        <div className="inner-modal">
          <h1>Log In</h1>
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
              type="text"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <p onClick={closeLogInModal}>x</p>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

LogIn.propTypes = {
  closeLogInModal: PropTypes.func.isRequired,
  logInUser: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  logInUser: userCreds => dispatch(logInUser(userCreds))
});

export default connect(
  null,
  mapDispatchToProps
)(LogIn);
