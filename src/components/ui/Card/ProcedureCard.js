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

export default ProcedureCard;
