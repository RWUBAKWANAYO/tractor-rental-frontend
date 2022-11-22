import React, { useEffect, useState } from 'react';
import { CheckIcon } from '../../../assets/svg';
import WarningCard from '../../../components/ui/Card/WarningCard';
import { PriceWarning } from '../../../data/Warning.constants';
import CalculateRent from '../utils/CalculateRent';
import SizeValidate from '../utils/SizeValidate';

const RentForm = ({ handleRent, tractorData }) => {
  const [formData, setFormData] = useState({
    required: true, width: '', height: '', hectare: '', date: '', new_farm: false,
  });

  useEffect(() => {
    setFormData({ ...formData, required: SizeValidate(formData) });
  }, [formData.width, formData.height, formData.hectare]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRent(CalculateRent(tractorData, formData));
  };
  return (
    <form className="rent-form-cont" onSubmit={handleSubmit}>
      <h1>Basic Information</h1>
      <div className="rent-form-size">
        <h2>Size of the land</h2>
        <div className="meter-size">
          <h5>Length in meter(m)</h5>
          <div>
            <input
              type="number"
              placeholder="width..."
              required={formData.required}
              onChange={(e) => setFormData({ ...formData, width: e.target.value })}
            />
            <hr />
            <input
              type="number"
              name="height"
              placeholder="height..."
              required={formData.required}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            />
          </div>
        </div>
        <b>Or</b>
        <div className="hectare-size">
          <h5>Length in hectare</h5>
          <div>
            <input
              type="number"
              name="hectare"
              placeholder="hectare..."
              required={formData.required}
              onChange={(e) => setFormData({ ...formData, hectare: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="rent-form-date">
        <h5>Enter a date of rent</h5>
        <input type="date" required onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      </div>

      <div className="rent-form-checkbox">
        <i
          style={{ backgroundColor: `${formData.new_farm ? '#192f51' : ''}` }}
          onClick={() => setFormData({ ...formData, new_farm: !formData.new_farm })}
          aria-hidden="true"
        >
          <CheckIcon color="#fafbfa" />
        </i>
        <h2>Click the button if this the first time to caltuvate your land</h2>
      </div>
      <WarningCard warning={PriceWarning(tractorData)} />
      <button type="submit" className="rent-calculate">Procced</button>

    </form>
  );
};

export default RentForm;
