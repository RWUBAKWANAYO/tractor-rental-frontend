import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { PhotoIcon } from '../../../assets/svg';
import { GetUser } from '../../../hooks/useLocalStorage';
import CloudinaryUpload from '../../../lib/CloudinaryUpload';
import TextMinimizer from '../../../utils/TextMinimizer';
import { ProfileUpdateFunc } from '../services';

const ChangeProfileForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState({});
  const [data, setData] = useState({ name: null, photo: null });

  useEffect(() => {
    if (GetUser()) {
      const { name, photo } = GetUser().info;
      setData({ name, photo });
    }
  }, []);

  const handleSubmit = ((e) => {
    e.preventDefault();
    const { name, photo } = GetUser().info;
    if (photo === data.photo && name === data.name) return null;
    if (photo === data.photo || !data.photo) {
      return dispatch(ProfileUpdateFunc({ name: data.name }));
    }
    return CloudinaryUpload(file).then((res) => {
      dispatch(ProfileUpdateFunc({ name: data.name, photo: res.url }));
    });
  });

  const handleFile = ((e) => {
    setFile(e.target.files[0]);
    setData({ ...data, photo: e.target.files[0].name });
  });
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <br />
      <label htmlFor="name">
        Edit Name
        <input
          type="text"
          className="normal-input"
          value={data.name ? data.name : ''}
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </label>

      <label htmlFor="file">
        Edit Photo
        <div className="picture-parent">
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
          />
          <div>
            <small>{data.photo ? TextMinimizer(data.photo, 25) : 'Upload image...'}</small>
            <PhotoIcon color="#192f51" />
          </div>
        </div>
      </label>

      <button type="submit" className="auth-submit">Save</button>
    </form>
  );
};

export default ChangeProfileForm;
