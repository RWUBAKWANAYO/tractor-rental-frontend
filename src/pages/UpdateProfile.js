import React, { useEffect } from 'react';
import '../features/Authentication/components/authentication.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../hooks/useLocalStorage';
import { FormsBg } from '../components/ui/Backgrounds';
import { ChangeProfileForm } from '../features/Settings';
import { ResetUpdateProfile } from '../features/Settings/services';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateprofile = useSelector((state) => state.updateprofile);

  useEffect(() => {
    if (updateprofile.user) {
      GetUser(updateprofile.user);
      dispatch(ResetUpdateProfile());
      navigate(-1);
    }
  }, [updateprofile]);

  return (
    <div className="auth-cont">
      <div className="auth-wrapper">
        <FormsBg />
        <div className="forms-cont">
          <h1>EDIT PROFILE</h1>
          <ChangeProfileForm />
        </div>

      </div>
    </div>
  );
};

export default UpdateProfile;
