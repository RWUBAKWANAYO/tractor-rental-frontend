import React, { useEffect } from 'react';
import '../features/Authentication/components/authentication.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from '../features/Authentication';
import { GetUser } from '../hooks/useLocalStorage';
import { FormsBg } from '../components/ui/Backgrounds';
import { ResetLogin } from '../features/Authentication/services';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedin = useSelector((state) => state.login);

  useEffect(() => {
    if (loggedin.user) {
      GetUser(loggedin.user);
      dispatch(ResetLogin());
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
