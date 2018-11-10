import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import './Landing.css';
import ModalButton from '../styledComponents/ModalButton';

class Landing extends Component {
  state = {
    landingModalOpen: true,
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
    const { signUpModalOpen, logInModalOpen, landingModalOpen } = this.state;

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

        <div className="hero" />
        <div className="button-container">
          <p>
            Marfa tousled freegan, health goth everyday carry prism four dollar
            toast raclette blog. Pitchfork waistcoat +1 mlkshk roof party
            aesthetic humblebrag ramps, yr selvage. Trust fund echo park
            sartorial put a bird on it. Twee ennui bushwick celiac try-hard
            pinterest. Bushwick microdosing edison bulb banh mi poutine DIY.
            Cornhole tote bag twee, bespoke ramps roof party
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
