import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import ProfileImage from './ProfileImage';
import AccountCard from './AccountCard';

const Navbar = () => (
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
          {/* <li><NavLink to="/login">Login</NavLink></li> */}
        </ul>

        <div className="navbar-account">
          <div className="navbar-account-prof">
            <ProfileImage />
          </div>
          <div className="navbar-account-access">
            <AccountCard />
          </div>

        </div>
      </div>
    </div>

  </nav>
);

export default Navbar;
