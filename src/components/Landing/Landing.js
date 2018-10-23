import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import './Landing.css';

class Landing extends Component {
  state = {
    signUpModalOpen: false
  };

  openSignUpModal = () => {
    this.setState({ signUpModalOpen: true });
  };

  closeSignUpModal = () => {
    this.setState({ signUpModalOpen: false });
  };

  render() {
    const { signUpModalOpen } = this.state;

    return (
      <div className="landing">
        {signUpModalOpen && <SignUp closeSignUpModal={this.closeSignUpModal} />}
        <button onClick={this.openSignUpModal}>Sign Up</button>
      </div>
    );
  }
}

export default Landing;
