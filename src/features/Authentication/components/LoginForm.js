import React, { useState } from 'react';
import { Eye } from '../../../assets/svg';

const LoginForm = () => {
  const [lock, setLock] = useState(false);
  return (
    <form className="auth-form">
      <label htmlFor="email">
        Email
        <input type="email" className="normal-input" />
      </label>

      <label htmlFor="password">
        Password
        <div className="pswd-parent">
          <input type={lock ? 'text' : 'password'} />
          <i onClick={() => setLock(!lock)} aria-hidden="true"><Eye color="#192f51" /></i>
        </div>
      </label>

      <button type="submit" className="auth-submit">SIGN IN</button>

    </form>
  );
};

export default LoginForm;
