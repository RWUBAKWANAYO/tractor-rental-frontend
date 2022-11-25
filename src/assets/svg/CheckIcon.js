import PropTypes from 'prop-types';
import React from 'react';

const CheckIcon = ({ color }) => (
  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5177 8.95646L9.59004 17.9129L6.07067 14.404L2.55172 10.8946L1.27586 12.1735L0 13.4528L4.79353 18.2441L9.58706 23.0353L19.7935 12.7982L30 2.56076L28.7224 1.28059L27.4453 0L18.5177 8.95646Z" fill={color} />
  </svg>

);

CheckIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default CheckIcon;
