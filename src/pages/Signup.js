import React, { useEffect } from 'react';
import '../features/Authentication/authentication.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignupForm } from '../features/Authentication';
import { GetUser } from '../hooks/useLocalStorage';
import { FormsBg } from '../components/ui/Backgrounds';
import { ResetSignup } from '../features/Authentication/services';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signedup = useSelector((state) => state.signup);

  useEffect(() => {
    if (signedup.user) {
      GetUser(signedup.user);
      dispatch(ResetSignup());
      navigate('/tractors');
    }
  }, [signedup]);

  return (
    <div className="auth-cont">
      <div className="auth-wrapper">
        <FormsBg />
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
