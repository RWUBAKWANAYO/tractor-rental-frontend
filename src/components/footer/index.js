import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  TwitterIcon,
} from '../../assets/svg';
import './footer.scss';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-wrapper">
      <h1>
        Tractor
        <span>Rental</span>
      </h1>

      <div className="contact-cont">
        <h4>Contact Us</h4>
        <div className="contact-icons">
          <div>
            <EmailIcon />
            <small>rwubakwanayoolivier@gmail.com</small>
          </div>
          <div>
            <PhoneIcon />
            <small>+250782775175</small>
          </div>
        </div>
      </div>

      <div className="follow-cont">
        <h4>Follow Us</h4>
        <div>
          <NavLink to="/">
            <TwitterIcon />
          </NavLink>
          <NavLink to="/">
            <LinkedinIcon />
          </NavLink>
          <NavLink to="/">
            <GithubIcon />
          </NavLink>
        </div>
      </div>
    </div>
    <h5>&copy;2022 TractorRental || Powered by Winnie</h5>
  </div>
);

export default Footer;
