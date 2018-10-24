import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LogIn.css';

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { closeLogInModal } = this.props;
    return (
      <form className="log-in">
        <div className="inner-modal">
          <h1>Log In</h1>
          <div className="input-wrapper">
            <h4>Email:</h4>
            <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange} />
          </div>
          <div className="input-wrapper">
            <h4>Password:</h4>
            <input type="text" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} />
          </div>
          <p onClick={closeLogInModal}>x</p>
        </div>
      </form>
    );
  }
}

LogIn.propTypes = {
  closeLogInModal: PropTypes.func.isRequired
};

export default LogIn;
