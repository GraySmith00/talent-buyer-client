import React, { Component } from 'react';
import ModalButton from '../styledComponents/ModalButton';
import PropTypes from 'prop-types';
import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="button-container">
          <p>
            Marfa tousled freegan, health goth everyday carry prism four dollar
            toast raclette blog. Pitchfork waistcoat +1 mlkshk roof party
            aesthetic humblebrag ramps, yr selvage. Trust fund echo park
            sartorial put a bird on it. Twee ennui bushwick celiac try-hard
            pinterest. Bushwick microdosing edison bulb banh mi poutine DIY.
            Cornhole tote bag twee, bespoke ramps roof party
          </p>

          <ModalButton
            className="half-button"
            onClick={this.props.openSignUpModal}
          >
            Sign Up
          </ModalButton>
          <ModalButton
            className="half-button"
            onClick={this.props.openLogInModal}
          >
            Log In
          </ModalButton>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {
  openSignUpModal: PropTypes.func.isRequired,
  openLogInModal: PropTypes.func.isRequired
};
