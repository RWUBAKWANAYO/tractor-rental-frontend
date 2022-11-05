import React from 'react';
import './card.scss';
import procedureIcon from '../../../assets/images/icon1.png';
import { ArrowLeftIcon } from '../../../assets/svg';

const ProcedureCard = ({ data }) => (
  <div className="procedure-card" key={data.title}>
    <img src={procedureIcon} alt="icon" />
    <h4>{data.title}</h4>
    <p>{data.desc}</p>
    <ArrowLeftIcon color="#fafbfa" />
  </div>
);

export default ProcedureCard;
