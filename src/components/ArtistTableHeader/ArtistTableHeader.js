import React from 'react';
import './ArtistTableHeader.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

export const ArtistTableHeader = ({ category, onClick, activeSort, name }) => {
  const buttonClass = classNames({
    header: true,
    active: activeSort === name
  });
  return (
    <h3
      className={buttonClass}
      name={name}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {category}
    </h3>
  );
};

ArtistTableHeader.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeSort: PropTypes.string,
  name: PropTypes.string.isRequired
};
