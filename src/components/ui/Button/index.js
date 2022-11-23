import PropTypes from 'prop-types';
import React from 'react';
import './button.scss';

const Button = ({ name, styleclass }) => (
  <button type="button" className={styleclass}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  styleclass: PropTypes.string.isRequired,
};

export default Button;
