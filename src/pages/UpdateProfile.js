import React, { useEffect, useState } from 'react';
import '../features/Authentication/authentication.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetUser } from '../hooks/useLocalStorage';
import { FormsBg } from '../components/ui/Backgrounds';
import { ChangeProfileForm } from '../features/Settings';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const registered = useSelector((state) => state.signup);

  // useEffect(() => {
  //   if (registered.user) {
  //     if (registered.user.token === token) setToken(GetUser(registered.user).token);
  //     navigate('/tractors');
  //   }
  // }, [registered]);

  return (
    <div className="auth-cont">
      <div className="auth-wrapper">
        <FormsBg />
        <div className="forms-cont">
          <h1>Change profile</h1>
          <ChangeProfileForm />
        </div>

      </div>
    </div>
  );
};

export default UpdateProfile;
