import React from 'react';
import '../features/Authentication/authentication.scss';
import { AuthLinks, LoginForm } from '../features/Authentication';
import AuthBackground from '../features/Authentication/components/AuthBackground';

const Login = () => (
  <div className="auth-cont">
    <div className="auth-wrapper">
      <AuthBackground />
      <div className="forms-cont">
        <h1>Sign in</h1>
        <LoginForm />
        <AuthLinks name="Register" />
      </div>

    </div>
  </div>
);

export default Login;
