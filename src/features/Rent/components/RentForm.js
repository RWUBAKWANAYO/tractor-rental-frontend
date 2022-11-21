import React from 'react';
import { CheckIcon } from '../../../assets/svg';
import WarningCard from '../../../components/ui/Card/WarningCard';
import { PriceWarning } from '../../../data/Warning.constants';

const RentForm = ({ ShowSaveRent, tractorData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    ShowSaveRent();
  };
  return (
    <form className="rent-form-cont" onSubmit={handleSubmit}>
      <h1>Basic Information</h1>
      <div className="rent-form-size">
        <h2>Size of the land</h2>
        <div className="meter-size">
          <h5>Length in meter(m)</h5>
          <div>
            <input type="number" placeholder="width..." />
            <hr />
            <input type="number" placeholder="height..." />
          </div>
        </div>
        <b>Or</b>
        <div className="hectare-size">
          <h5>Length in hectare</h5>
          <div>
            <input type="number" placeholder="hectare..." />
          </div>
        </div>
      </div>

      <div className="rent-form-date">
        <h5>Enter a date of rent</h5>
        <input type="date" />
      </div>

      <div className="rent-form-checkbox">
        <i><CheckIcon color="#fafbfa" /></i>
        <h2>Click the button if this the first time to caltuvate your land</h2>
      </div>
      <WarningCard warning={PriceWarning(tractorData)} />
      <button type="submit" className="rent-calculate">Procced</button>

    </form>
  );
};

export default RentForm;
