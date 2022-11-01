import React from 'react';
import ProcedureData from './PrcedureData';
import './procedure.scss';
import bg from '../../../assets/images/bg2.png';
import icon1 from '../../../assets/images/icon1.png';
import ArrowLeft from '../../../assets/svg/ArrowLeft';

const Procedure = () => (
  <div className="procedure-cont">
    <img src={bg} alt="svg" className="procedure-bg" />
    <h1>How does it work</h1>

    <div className="procedure-cards-cont">
      {ProcedureData.map((data) => (
        <div className="procedure-card" key={data.title}>
          <img src={icon1} alt="icon" />
          <h4>{data.title}</h4>
          <p>{data.desc}</p>
          <ArrowLeft color="#fafbfa" />
        </div>
      ))}

    </div>
  </div>
);

export default Procedure;
