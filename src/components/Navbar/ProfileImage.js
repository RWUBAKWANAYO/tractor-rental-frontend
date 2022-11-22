import React from 'react';
import GetProfileLetters from '../../utils/GetProfileLetters';

const ProfileImage = ({ user }) => (
  <div className="user-photo">
    {user.photo && <img src={user.photo} alt="" />}
    {!user.photo && <h2>{GetProfileLetters(user.name)}</h2>}
  </div>
);

export default ProfileImage;
