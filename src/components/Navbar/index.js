import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';
import AccountCard from './AccountCard';
import { GetUser } from '../../hooks/useLocalStorage';
import { ResetLogout } from '../../features/Authentication/services';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const logout = useSelector((state) => state.logout);

  const handleUserInfo = () => {
    if (GetUser()) {
      setUser(GetUser().info);
    } else {
      setUser(null);
    }
  };
  useEffect(() => { handleUserInfo(); }, []);
  useEffect(() => {
    if (logout.status === 'ok') {
      handleUserInfo();
      dispatch(ResetLogout());
      navigate('/');
    }
  }, [logout]);
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
