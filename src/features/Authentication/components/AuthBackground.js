import React from 'react';
import { NavLink } from 'react-router-dom';
import stars from '../../../assets/images/stars.png';
import curves from '../../../assets/images/curves.png';

const AuthBackground = () => (
  <div className="auth-bg">
    <NavLink to="/"><img src={stars} alt="svg" className="stars-bg" /></NavLink>
    <img src={curves} alt="svg" className="curves-bg" />
  </div>
);

export default AuthBackground;
