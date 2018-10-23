import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import './Landing.css';

class Landing extends Component {
  state = {
    signUpModalOpen: false,
    logInModalOpen: false
  };

  openSignUpModal = () => {
    this.setState({ signUpModalOpen: true });
  };

  closeSignUpModal = () => {
    this.setState({ signUpModalOpen: false });
  };

  openLogInModal = () => {
    this.setState({ logInModalOpen: true });
  }

  closeLogInModal = () => {
    this.setState({ logInModalOpen: false });
  }

  render() {
    const { signUpModalOpen, logInModalOpen } = this.state;

    return (
      <div className="landing">
        {signUpModalOpen && <SignUp closeSignUpModal={this.closeSignUpModal} />}
        {logInModalOpen && <LogIn closeLogInModal={this.closeLogInModal} />}
        <button onClick={this.openSignUpModal}>Sign Up</button>
        <button onClick={this.openLogInModal}>Log In</button>
      </div>
    );
  }
}

export default Landing;
