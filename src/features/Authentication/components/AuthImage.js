import React from 'react';
import { NavLink } from 'react-router-dom';
import stars from '../../../assets/images/stars.png';
import curves from '../../../assets/images/curves.png';

const AuthImage = () => (
  <div className="auth-img">
    <NavLink to="/"><img src={stars} alt="svg" className="stars-img" /></NavLink>
    <img src={curves} alt="svg" className="curves-img" />
  </div>
);

export default AuthImage;
