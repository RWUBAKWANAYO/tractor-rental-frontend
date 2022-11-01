import React from 'react';
import './buttons.scss';

const Button = ({ name }) => (
  <button type="button" className="common-btn">{name}</button>
);

export default Button;
