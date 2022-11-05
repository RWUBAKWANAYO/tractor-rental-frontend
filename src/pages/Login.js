import React from 'react';
import '../features/Authentication/authentication.scss';
import { NavLink } from 'react-router-dom';
import { LoginForm, AuthImage } from '../features/Authentication';

const Login = () => (
  <div className="auth-cont">
    <div className="auth-wrapper">
      <AuthImage />
      <div className="forms-cont">
        <h1>Sign in</h1>
        <LoginForm />
        <small className="auth-links">
          You dont have account?
          <NavLink to="/signup">Register</NavLink>
        </small>
      </div>

    </div>
  </div>
);

export default Login;
