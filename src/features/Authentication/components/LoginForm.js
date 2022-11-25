import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Eye } from '../../../assets/svg';
import { FetchUser } from '../services';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [lock, setLock] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchUser({ email: emailRef.current.value, password: passwordRef.current.value }));
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input type="email" className="normal-input" required ref={emailRef} />
      </label>

      <label htmlFor="password">
        Password
        <div className="pswd-parent">
          <input type={lock ? 'text' : 'password'} required ref={passwordRef} />
          <i onClick={() => setLock(!lock)} aria-hidden="true"><Eye color="#192f51" /></i>
        </div>
      </label>

      <button type="submit" className="auth-submit">SIGN IN</button>

    </form>
  );
};

export default LoginForm;
