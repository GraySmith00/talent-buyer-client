import React, { Component } from 'react';
import NavLink from '../NavLink/NavLink';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo-wrap">
          <img className="frequency" src={require('./frequency.svg')} alt="frequency-logo" />
          <h1 className="logo">TalentBC</h1>
        </div>
        <section className="nav-link-wrapper">
          <NavLink displayText="Home" routeLink="/home" />
          <NavLink displayText="Artists" routeLink="/artists" />
        </section>
      </div>
    );
  }
}

export default Nav;
