import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthLinks = ({ name }) => (
  name === 'Register' ? (
    <small className="auth-links">
      You dont have account?
      {' '}
      <NavLink to="/signup">{name}</NavLink>
    </small>
  ) : (
    <small className="auth-links">
      arleady have account?
      {' '}
      <NavLink to="/login">{name}</NavLink>
    </small>
  )

);

export default AuthLinks;
