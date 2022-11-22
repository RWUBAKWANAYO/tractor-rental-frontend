import React, { useEffect, useState } from 'react';
import '../features/Authentication/authentication.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthImage, SignupForm } from '../features/Authentication';
import { GetUser } from '../hooks/useLocalStorage';

const Signup = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const registered = useSelector((state) => state.signup);

  useEffect(() => {
    if (registered.user) {
      if (registered.user.token === token) setToken(GetUser(registered.user).token);
      navigate('/tractors');
    }
  }, [registered]);

  return (
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
};

export default Signup;
