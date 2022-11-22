import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ProfileImage from './ProfileImage';

const AccountCard = ({ user }) => (
  <div className="navbar-account-access-wrapper">
    <div className="access-wrapper-profile">
      <ProfileImage user={user} />
    </div>
    <h4>{user.name}</h4>
    <small>{user.email}</small>
    <Link to={`/myrent/${user.id}`}><Button name="My Rent" styleclass="colored-btn" /></Link>
    <Button name="Logout" styleclass="blue-btn" />
  </div>
);

export default AccountCard;
