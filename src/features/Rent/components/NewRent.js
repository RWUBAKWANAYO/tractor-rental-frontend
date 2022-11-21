import React, { useState } from 'react';
import './rent.scss';
import { CrossIcon } from '../../../assets/svg';
import SaveRent from './SaveRent';
import RentForm from './RentForm';

const NewRent = ({ ShowRent, tractorData }) => {
  const [visible, setVisible] = useState(true);
  const ShowSaveRent = () => setVisible(!visible);

  return (
    <div className="new-rental-cont">
      <i className="rent-close" onClick={() => ShowRent(false)} aria-hidden="true"><CrossIcon color="#192f51" /></i>
      {visible && (
      <div className="new-rental-wrapper"><RentForm ShowSaveRent={ShowSaveRent} tractorData={tractorData} /></div>
      )}
      {!visible && <div className="new-rental-wrapper"><SaveRent /></div>}
    </div>
  );
};

export default NewRent;
