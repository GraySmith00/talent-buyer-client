import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/artists">Artists</Link>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

export default Nav;
