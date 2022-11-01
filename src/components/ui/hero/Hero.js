import React from 'react';
import './hero.scss';
import heroImg from '../../../assets/images/hero-img.png';
import Button from '../buttons/Button';

const Hero = () => (
  <div className="hero-cont">
    <div className="hero-wrapper">
      <div className="hero-desc">
        <h1>
          <span>Welcome to </span>
          TractorRental
        </h1>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <Button name="Rent now" />
      </div>
      <div className="hero-img"><img src={heroImg} alt="tractor" /></div>
    </div>
  </div>
);

export default Hero;
