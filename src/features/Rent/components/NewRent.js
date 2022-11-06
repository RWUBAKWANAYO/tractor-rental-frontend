import React, { useState } from 'react';
import './rent.scss';
import { CrossIcon } from '../../../assets/svg';
import SaveRent from './SaveRent';
import RentForm from './RentForm';

const NewRent = ({ ShowRent }) => {
  const [visible, setVisible] = useState(true);
  const ShowSaveRent = () => setVisible(!visible);

  return (
    <div className="new-rental-cont">
      <i onClick={() => ShowRent(false)} aria-hidden="true"><CrossIcon color="#1f675e" /></i>
      {visible && (
      <div className="new-rental-wrapper">
        <h1>Basic Information</h1>
        <p>Please provide size of the land to get total cost</p>
        <RentForm ShowSaveRent={ShowSaveRent} />
      </div>
      )}
      {!visible && <div className="new-rental-wrapper"><SaveRent /></div>}
    </div>
  );
};

export default NewRent;
