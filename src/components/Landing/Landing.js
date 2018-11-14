import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import './Landing.css';
import Splash from '../Splash/Splash';

class Landing extends Component {
  state = {
    signUpModalOpen: false,
    logInModalOpen: false,
    landingModalOpen: true
  };

  openSignUpModal = () => {
    this.setState({ signUpModalOpen: true, landingModalOpen: false });
  };

  closeSignUpModal = () => {
    this.setState({ signUpModalOpen: false });
  };

  openLogInModal = () => {
    this.setState({ logInModalOpen: true, landingModalOpen: false });
  };

  closeLogInModal = () => {
    this.setState({ logInModalOpen: false });
  };

  render() {
    const { signUpModalOpen, logInModalOpen, landingModalOpen } = this.state;

    return (
      <div className="landing">
        <div className="hero">
          <h1>Talent Buyer</h1>
        </div>

        {signUpModalOpen && (
          <SignUp
            closeSignUpModal={this.closeSignUpModal}
            openLogInModal={this.openLogInModal}
          />
        )}
        {logInModalOpen && (
          <LogIn
            closeLogInModal={this.closeLogInModal}
            openSignUpModal={this.openSignUpModal}
          />
        )}
        {landingModalOpen && (
          <Splash
            openLogInModal={this.openLogInModal}
            openSignUpModal={this.openSignUpModal}
          />
        )}
      </div>
    );
  }
}

export default Landing;
