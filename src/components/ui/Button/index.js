import React from 'react';
import './button.scss';

const Button = ({ name, styleclass }) => (
  <button type="button" className={styleclass}>{name}</button>
);

export default Button;
