import React from 'react';
import './card.scss';

const TractorCard = ({ tractor }) => (
  <div className="tractor-card" id="main-card">
    <img src={tractor.photo} alt="tractor" />
    <h4>{tractor.name}</h4>
    <p>{`${tractor.completion} Heactare per day`}</p>
    <p>{`${tractor.demand} Peaple demanded`}</p>
    <small>{`${tractor.price}RWF`}</small>
  </div>
);

export default TractorCard;
