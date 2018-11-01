import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
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
      </div>
    );
  }
}

export default Nav;
