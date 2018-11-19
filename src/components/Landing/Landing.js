import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import Splash from '../Splash/Splash';
import dashImage from './dashImage.jpg';
import './Landing.css';

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
        <section className="market-dash">
          <div className="market-dash-text">
            <h2 className="section-title">
              Organize all your shows in the dashboard.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
              illum voluptates maiores eveniet minus eum laboriosam quos quo
              soluta!
            </p>
          </div>
          <img src={dashImage} alt="dashboard" style={{ height: '250px' }} />
        </section>
        <section className="market-browse">
          <img src={dashImage} alt="dashboard" style={{ height: '250px' }} />
          <div className="market-dash-text">
            <h2 className="section-title">
              Organize all your shows in the dashboard.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
              illum voluptates maiores eveniet minus eum laboriosam quos quo
              soluta!
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
