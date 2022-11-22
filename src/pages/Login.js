import React, { useEffect, useState } from 'react';
import '../features/Authentication/authentication.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginForm } from '../features/Authentication';
import { GetUser } from '../hooks/useLocalStorage';
import { FormsBg } from '../components/ui/Backgrounds';

const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const loggedin = useSelector((state) => state.login);

  useEffect(() => {
    if (loggedin.user) {
      if (loggedin.user.token === token) setToken(GetUser(loggedin.user).token);
      navigate('/tractors');
    }
  }, [loggedin]);

  return (
    <div className="auth-cont">
      <div className="auth-wrapper">
        <FormsBg />
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
};

export default Login;
