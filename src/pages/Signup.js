import React from 'react';
import '../features/Authentication/authentication.scss';
import { NavLink } from 'react-router-dom';
import { AuthImage, SignupForm } from '../features/Authentication';

const Signup = () => (
  <div className="auth-cont">
    <div className="auth-wrapper">
      <AuthImage />
      <div className="forms-cont">
        <h1>Sign up</h1>
        <SignupForm />
        <small className="auth-links">
          arleady have account?
          <NavLink to="/login">Login</NavLink>
        </small>
      </div>

    </div>
  </div>
);

export default Signup;
