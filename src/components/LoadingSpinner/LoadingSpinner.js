import React from 'react';
import spinnerTransparent from './spinnerTransparent.gif';

const LoadingSpinner = () => {
  return (
    <img
      src={spinnerTransparent}
      alt="Loading..."
      style={{ height: '100px', width: '100px', margin: 'auto' }}
    />
  );
};

export default LoadingSpinner;
