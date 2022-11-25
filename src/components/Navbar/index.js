import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import ProfileImage from './ProfileImage';
import AccountCard from './AccountCard';
import { GetUser } from '../../hooks/useLocalStorage';

const Navbar = () => {
  const [user, setUser] = useState(null);

  const handleUserInfo = () => {
    if (GetUser()) {
      setUser(GetUser().info);
    } else {
      setUser(null);
    }
  };
  useEffect(() => { handleUserInfo(); }, []);
  return (
    <nav className="navbar-cont">
      <div className="navbar-wrapper">
        <h1>
          <span>Tractor</span>
          <span>Rental</span>
        </h1>
        <div className="navbar-links">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tractors">Tractors</NavLink></li>
            {!user && <li><NavLink to="/login">Login</NavLink></li>}
          </ul>

          {user && (
          <div className="navbar-account">
            <div className="navbar-account-prof">
              <ProfileImage user={user} />
            </div>
            <div className="navbar-account-access">
              <AccountCard user={user} handleUserInfo={handleUserInfo} />
            </div>
          </div>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
