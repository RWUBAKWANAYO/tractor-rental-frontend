import PropTypes from 'prop-types';
import React from 'react';
import './card.scss';
import { ArrowLeftIcon } from '../../../assets/svg';

const ProcedureCard = ({ data }) => (
  <div className="procedure-card" key={data.title}>
    <img src={data.image} alt="icon" />
    <h4>{data.title}</h4>
    <p>{data.desc}</p>
    <ArrowLeftIcon color="#fafbfa" />
  </div>
);

ProcedureCard.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

ProcedureCard.defaultProps = {
  data: {
    desc: '',
    image: '',
    title: '',
  },
};

export default ProcedureCard;
