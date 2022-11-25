import PropTypes from 'prop-types';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EditIcon } from '../../assets/svg';
import { RemoveUser } from '../../hooks/useLocalStorage';
import Button from '../ui/Button';
import ProfileImage from './ProfileImage';

const AccountCard = ({ user, handleUserInfo }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    RemoveUser();
    handleUserInfo();
    navigate('/');
  };
  return (
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
      <div onClick={handleLogout} aria-hidden="true">
        <Button name="Logout" styleclass="blue-btn" />
      </div>
    </div>
  );
};

AccountCard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
  handleUserInfo: PropTypes.func.isRequired,
};

AccountCard.defaultProps = {
  user: {
    email: '',
    name: '',
  },
};

export default AccountCard;
