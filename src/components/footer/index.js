import React from 'react';
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
            <small>winnie@gmail.com</small>
          </div>
          <div>
            <PhoneIcon />
            <small>+250 780 659 431</small>
          </div>
        </div>
      </div>
      <div className="follow-cont">
        <h4>Follow Us</h4>
        <div>
          <a href="https://twitter.com" target="blank">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <LinkedinIcon />
          </a>
          <a href="https://github.com" target="blank">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
    <h5>&copy;2022 TractorRental || Powered by Winnie</h5>
  </div>
);

export default Footer;
