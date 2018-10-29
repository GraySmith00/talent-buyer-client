import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';
import PropTypes from 'prop-types';

const NavLink = ({ displayText, routeLink }) => {
  return (
    <Link className="nav-link" to={routeLink}>{displayText}</Link>
  );
};

NavLink.propTypes = {
  displayText: PropTypes.string.isRequired,
  routeLink: PropTypes.string.isRequired
};

export default NavLink;