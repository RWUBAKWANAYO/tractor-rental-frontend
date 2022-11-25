import PropTypes from 'prop-types';
import React from 'react';

const DateIcon = ({ color }) => (
  <svg width="72" height="80" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12 7.915 11.924 8 8.455 8C6.024 8 4.138 8.772 2.455 10.455L0 12.909V44V75.091L2.455 77.545L4.909 80H36H67.091L69.545 77.545L72 75.091V44V12.909L69.545 10.455C67.862 8.772 65.976 8 63.545 8C60.076 8 60 7.915 60 4V0H56H52V4V8H36H20V4V0H16H12V4ZM64 50V72H36H8V50V28H36H64V50ZM16 40V44H20H24V40V36H20H16V40ZM32 40V44H36H40V40V36H36H32V40ZM48 40V44H52H56V40V36H52H48V40Z" fill={color} />
  </svg>

);

DateIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default DateIcon;
