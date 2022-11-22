import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Eye, PhotoIcon } from '../../../assets/svg';
import { CreateUser } from '../services';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [lock, setLock] = useState(false);
  const [data, setData] = useState({
    name: null, email: null, picture: null, password: null,
  });

  const handleSubmit = ((e) => {
    e.preventDefault();
    dispatch(CreateUser(data));
  });

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Full name
        <input
          type="text"
          className="normal-input"
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          type="email"
          className="normal-input"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </label>

      <label htmlFor="file">
        Photo
        <div className="picture-parent">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setData({ ...data, picture: e.target.files[0] })}
          />
          <div>
            <small>{data.picture ? data.picture.name : ''}</small>
            <PhotoIcon color="#192f51" />
          </div>
        </div>
      </label>

      <label htmlFor="password">
        Password
        <div className="pswd-parent">
          <input
            type={lock ? 'text' : 'password'}
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <i onClick={() => setLock(!lock)} aria-hidden="true"><Eye color="#192f51" /></i>
        </div>
      </label>

      <button type="submit" className="auth-submit">REGISTER</button>
    </form>
  );
};

export default SignupForm;
