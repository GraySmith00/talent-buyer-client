import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import './Landing.css';
import ModalButton from '../styledComponents/ModalButton';

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
  };

  closeLogInModal = () => {
    this.setState({ logInModalOpen: false });
  };

  render() {
    const { signUpModalOpen, logInModalOpen } = this.state;

    return (
      <div className="landing">
        {signUpModalOpen && <SignUp closeSignUpModal={this.closeSignUpModal} />}
        {logInModalOpen && <LogIn closeLogInModal={this.closeLogInModal} />}
        <div className="hero">
          <h1>Talent Buyer</h1>
        </div>
        <div className="button-container">
          <p>
            Talent Buyer is the fastest and easist way for music talent buyers
            to browse artists and filter by agency, popularity, and genre.
            Artists can be saved to a watchlist for quick reference later.
            Buyers can easily build, edit, and download offers and keep track of
            the calendar for their venues.
          </p>

          <ModalButton className="half-button" onClick={this.openSignUpModal}>
            Sign Up
          </ModalButton>
          <ModalButton className="half-button" onClick={this.openLogInModal}>
            Log In
          </ModalButton>
        </div>
      </div>
    );
  }
}

export default Landing;
