import React from 'react';
import { NavLink } from 'react-router-dom';
import './StyledNavLink.css';
import PropTypes from 'prop-types';

const StyledNavLink = ({ displayText, routeLink }) => {
  return (
    <NavLink className="nav-link" to={routeLink}>
      {displayText}
    </NavLink>
  );
};

StyledNavLink.propTypes = {
  displayText: PropTypes.string.isRequired,
  routeLink: PropTypes.string.isRequired
};

export default StyledNavLink;
