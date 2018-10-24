import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';

class SignUp extends Component {
  render() {
    const { closeSignUpModal } = this.props;
    return (
      <div className="sign-up">
        <div className="inner-modal">
          <h1>Sign Up</h1>
          <p onClick={closeSignUpModal}>x</p>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  closeSignUpModal: PropTypes.func.isRequired
};

export default SignUp;
