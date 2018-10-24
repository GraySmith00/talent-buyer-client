import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LogIn.css';

class LogIn extends Component {
  render() {
    const { closeLogInModal } = this.props;
    return (
      <div className="log-in">
        <div className="inner-modal">
          <h1>Log In</h1>
          <p onClick={closeLogInModal}>x</p>
        </div>
      </div>
    );
  }
}

LogIn.propTypes = {
  closeLogInModal: PropTypes.func.isRequired
};

export default LogIn;
