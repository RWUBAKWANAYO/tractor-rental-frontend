import React from 'react';
import '../features/Authentication/authentication.scss';
import { AuthLinks, SignupForm } from '../features/Authentication';
import AuthBackground from '../features/Authentication/components/AuthBackground';

const Signup = () => (
  <div className="auth-cont">
    <div className="auth-wrapper">
      <AuthBackground />
      <div className="forms-cont">
        <h1>Sign up</h1>
        <SignupForm />
        <AuthLinks name="Login" />
      </div>

    </div>
  </div>
);

export default Signup;
