import PropTypes from 'prop-types';
import React from 'react';
import GetProfileLetters from '../../utils/GetProfileLetters';

const ProfileImage = ({ user }) => (
  <div className="user-photo">
    {user.photo && <img src={user.photo} alt="" />}
    {!user.photo && <h2>{GetProfileLetters(user.name)}</h2>}
  </div>
);

ProfileImage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
  }),
};

ProfileImage.defaultProps = {
  user: {
    name: '',
    photo: '',
  },
};

export default ProfileImage;
