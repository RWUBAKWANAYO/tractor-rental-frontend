import React from 'react';
import './card.scss';
import tractorimg from '../../../assets/images/tractor_img.png';
import TextMinimizer from '../../../utils/TextMinimizer';

const TractorCard = ({ tractor }) => (
  <div className="tractor-card" id="main-card">
    <img src={tractorimg} alt="tractor" />
    <h4>{tractor.name}</h4>
    <p>9 heactare per day</p>
    <p>256 Peaple demanded</p>
    <small>{`${tractor.price}RWF`}</small>
  </div>
);

export default TractorCard;
