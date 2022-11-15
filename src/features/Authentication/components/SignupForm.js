import React, { useState } from 'react';
import { Eye, PhotoIcon } from '../../../assets/svg';

const SignupForm = () => {
  const [lock, setLock] = useState(false);
  const [data, setData] = useState({ picture: null });

  return (
    <form className="auth-form">
      <label htmlFor="name">
        Full name
        <input type="text" className="normal-input" />
      </label>

      <label htmlFor="email">
        Email
        <input type="email" className="normal-input" />
      </label>

      <label htmlFor="password">
        Photo
        <div className="picture-parent">
          <input type="file" accept="image/*" onChange={(e) => setData({ ...data, picture: e.target.files[0] })} />
          <div>
            <small>{data.picture ? data.picture.name : ''}</small>
            <PhotoIcon color="#192f51" />
          </div>
        </div>
      </label>

      <label htmlFor="password">
        Password
        <div className="pswd-parent">
          <input type={lock ? 'text' : 'password'} />
          <i onClick={() => setLock(!lock)} aria-hidden="true"><Eye color="#192f51" /></i>
        </div>
      </label>

      <button type="submit" className="auth-submit">REGISTER</button>
    </form>
  );
};

export default SignupForm;
