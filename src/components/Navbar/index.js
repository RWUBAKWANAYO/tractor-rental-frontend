import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import Button from '../ui/Button';

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
          <li><NavLink to="/">Tractors</NavLink></li>
        </ul>

        <div className="navbar-account">
          {/* <button type="button" className="login-btn">Login</button> */}
          <div className="navbar-account-cont">
            <div className="navbar-account-prof">
              <img src="https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg?w=2000" alt="user profile" />
              <span>
                <small>Benjamin</small>
                <small>Welcome back!</small>
              </span>
            </div>
            <div className="navbar-account-btn">
              <div>
                <Button name="Logout" styleclass="colored-btn" />
                <Button name="Logout" styleclass="light-btn" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
);

export default Navbar;
