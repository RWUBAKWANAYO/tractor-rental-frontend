import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PhotoIcon } from '../../../assets/svg';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: null, picture: null, require: true });

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
          required={data.require}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </label>

      <label htmlFor="file">
        Photo
        <div className="picture-parent">
          <input
            type="file"
            accept="image/*"
            required={data.require}
            onChange={(e) => setData({ ...data, picture: e.target.files[0] })}
          />
          <div>
            <small>{data.picture ? data.picture.name : 'Upload image...'}</small>
            <PhotoIcon color="#192f51" />
          </div>
        </div>
      </label>

      <button type="submit" className="auth-submit">UPDATE</button>
    </form>
  );
};

export default SignupForm;
