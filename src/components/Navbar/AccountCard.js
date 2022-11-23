import React from 'react';
import { Link } from 'react-router-dom';
import { EditIcon } from '../../assets/svg';
import Button from '../ui/Button';
import ProfileImage from './ProfileImage';

const AccountCard = ({ user }) => (
  <div className="navbar-account-access-wrapper">
    <div className="access-wrapper-profile">
      <Link to="/update_profile" className="edit-link">
        <EditIcon color="#192f51" />
      </Link>
      <ProfileImage user={user} />
    </div>
    <h4>{user.name}</h4>
    <small>{user.email}</small>
    <Link to="/myrent" className="myrent-link">
      <Button name="My Rent" styleclass="colored-btn" />
    </Link>
    <Button name="Logout" styleclass="blue-btn" />
  </div>
);

export default AccountCard;
