import PropTypes from 'prop-types';
import React from 'react';

const TrendIcon = ({ color }) => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M38.2222 1.44444V2.88889H41.6107H44.9991L37.9447 9.94333L30.89 16.998L25.0002 11.1113L19.1104 5.22489L9.78089 14.5524L0.451111 23.8802L1.49844 24.9438L2.546 26.0073L10.8284 17.7271L19.1107 9.44711L25 15.3333L30.8893 21.2196L39.0002 13.1109L47.1111 5.00222V8.39V11.7778H48.5556H50V5.88889V0H44.1111H38.2222V1.44444ZM38.2222 32.3333V47.1111H36.7778H35.3333V38.2222V29.3333H30.8889H26.4444V38.2222V47.1111H25H23.5556V35.2176V23.324L19.1667 23.3842L14.7778 23.4444L14.7202 35.2778L14.6627 47.1111H13.2202H11.7778V39.6667V32.2222H7.33333H2.88889V39.6667V47.1111H1.44444H0V48.5556V50H25H50V48.5556V47.1111H48.5556H47.1111V32.3333V17.5556H42.6667H38.2222V32.3333Z" fill={color} />
  </svg>

);

TrendIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TrendIcon;
