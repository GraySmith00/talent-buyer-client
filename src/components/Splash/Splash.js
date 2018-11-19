import React, { Component } from 'react';
import ModalButton from '../styledComponents/ModalButton';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Splash.css';

export class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <p>
          Talent Buyer is the fastest and easist way for music talent buyers to
          browse artists and filter by agency, popularity, and genre. Artists
          can be saved to a watchlist for quick reference later. Buyers can
          easily build, edit, and download offers and keep track of the calendar
          for their venues.
        </p>
        <section className="buttons">
          <ModalButton onClick={this.props.openSignUpModal}>
            Sign Up
          </ModalButton>
          <ModalButton onClick={this.props.openLogInModal}>Log In</ModalButton>
        </section>
      </div>
    );
  }
}

Splash.propTypes = {
  openSignUpModal: PropTypes.func.isRequired,
  openLogInModal: PropTypes.func.isRequired
};

export default withRouter(Splash);
