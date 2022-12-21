import React from 'react';
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  TwitterIcon,
} from '../../assets/svg';
import './footer.scss';

const MainFooter = () => (
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
          <a href="https://twitter.com/rwubakwanayo?t=fP8ZzLHMQWRnyBXnHGhEwA&s=09" target="blank">
            <TwitterIcon />
          </a>
          <a href="https://rw.linkedin.com/in/rwubakwanayo-olivier?trk=people-guest_people_search-card" target="blank">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/RWUBAKWANAYO" target="blank">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
    <h5>&copy;2022 TractorRental || Powered by Rwubakwanayo Olivier</h5>
  </div>
);
export default MainFooter;
