import React from 'react';
import './buttons.scss';

export const LightButton = ({ name }) => (
  <button type="button" className="light-btn">{name}</button>
);

export const CurvedButton = ({ name }) => (
  <button type="button" className="curved-btn">{name}</button>
);

export const ColoredButton = ({ name }) => (
  <button type="button" className="colored-btn">{name}</button>
);
