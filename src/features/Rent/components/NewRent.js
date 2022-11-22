import React, { useState } from 'react';
import './rent.scss';
import { CrossIcon } from '../../../assets/svg';
import SaveRent from './SaveRent';
import RentForm from './RentForm';

const NewRent = ({ ShowRent, tractorData }) => {
  const [visible, setVisible] = useState(true);
  const [rentData, setRentData] = useState({});
  const handleRent = (data) => {
    setRentData(data);
    setVisible(!visible);
  };

  return (
    <div className="new-rental-cont">
      <i className="rent-close" onClick={() => ShowRent(false)} aria-hidden="true"><CrossIcon color="#192f51" /></i>
      {visible && (
      <div className="new-rental-wrapper"><RentForm handleRent={handleRent} tractorData={tractorData} /></div>
      )}
      {!visible && <div className="new-rental-wrapper"><SaveRent tractorData={tractorData} rentData={rentData} /></div>}
    </div>
  );
};

export default NewRent;
