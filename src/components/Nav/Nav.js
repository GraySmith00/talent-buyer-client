import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

export class Nav extends Component {
  render() {
    const { currentVenue } = this.props;
    return (
      <div className="nav">
        <div className="logo-wrap">
          <img
            className="frequency"
            src={require('./frequency.svg')}
            alt="frequency-logo"
          />
          <h1 className="logo">TalentBC</h1>
        </div>
        <section className="nav-link-wrapper">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/artists" className="nav-link">
            Artists
          </NavLink>
        </section>
        <section className="venue-info">
          <header>Current Venue</header>
          <div className="venue-info-main">
            <p>{currentVenue.name}</p>
            <p>{currentVenue.street_address}</p>
            <p>
              {currentVenue.city}, {currentVenue.state}
            </p>
            <p>Capacity: {currentVenue.capacity}</p>
          </div>
        </section>
      </div>
    );
  }
}

Nav.propTypes = {
  currentVenue: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  currentVenue: state.currentVenue
});

export default connect(mapStateToProps)(Nav);
