import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ProfileImage from './ProfileImage';

const AccountCard = () => (
  <div className="navbar-account-access-wrapper">
    <div className="access-wrapper-profile">
      <ProfileImage />
    </div>
    <h4>Rwubakwanayo Olivier</h4>
    <small>rwubakwanayoolivier@gmail.com</small>
    <Link to="/myrent"><Button name="My Rent" styleclass="colored-btn" /></Link>
    <Button name="Logout" styleclass="light-btn" />
  </div>
);

export default AccountCard;
