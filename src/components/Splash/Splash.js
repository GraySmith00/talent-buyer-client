import React, { Component } from 'react';
import ModalButton from '../styledComponents/ModalButton';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Splash.css';

export class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="button-container">
          <p>
            Talent Buyer is the fastest and easist way for music talent buyers
            to browse artists and filter by agency, popularity, and genre.
            Artists can be saved to a watchlist for quick reference later.
            Buyers can easily build, edit, and download offers and keep track of
            the calendar for their venues.
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

export default withRouter(Splash);
