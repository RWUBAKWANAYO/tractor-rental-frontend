import PropTypes from 'prop-types';
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

TractorCard.propTypes = {
  tractor: PropTypes.shape({
    completion: PropTypes.number,
    demand: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.number,
  }),
};

TractorCard.defaultProps = {
  tractor: {
    completion: 0,
    demand: 0,
    name: '',
    photo: '',
    price: 0,
  },
};

export default TractorCard;
