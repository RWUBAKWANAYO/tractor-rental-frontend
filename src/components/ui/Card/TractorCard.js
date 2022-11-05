import React from 'react';
import './card.scss';
import tractorimg from '../../../assets/images/tractor_img.png';
import TextMinimizer from '../../../utils/TextMinimizer';

const TractorCard = ({ tractor }) => (
  <div className="tractor-card" id="main-card">
    <img src={tractorimg} alt="tractor" />
    <h4>{tractor.name}</h4>
    <p>{TextMinimizer(tractor.description)}</p>
    <small>
      {tractor.price}
      Rwf
    </small>
  </div>
);

export default TractorCard;
