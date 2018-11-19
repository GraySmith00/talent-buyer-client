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
    const { signUpModalOpen, logInModalOpen } = this.state;

    return (
      <div className="landing">
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
        <section className="hero">
          <h1>Talent Buyer</h1>
          <Splash
            openLogInModal={this.openLogInModal}
            openSignUpModal={this.openSignUpModal}
          />
          <section className="divider">
            <div className="divider-line" />
            <i className="fas fa-angle-down" />
            <div className="divider-line" />
          </section>
        </section>
        <section className="market-dashboard" />
      </div>
    );
  }
}

export default Landing;
