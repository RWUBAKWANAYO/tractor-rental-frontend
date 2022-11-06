import React from 'react';

const RentForm = ({ ShowSaveRent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    ShowSaveRent();
  };
  return (
    <form className="rent-form-cont" onSubmit={handleSubmit}>
      <div className="size-in-meter">
        <label htmlFor="width">
          Width in meter(m)
          <input type="number" className="normal-input" />
        </label>

        <label htmlFor="height">
          Height in meter(m)
          <input type="number" className="normal-input" />
        </label>
      </div>

      <h2>Or</h2>

      <label htmlFor="hectare">
        Use Hectare instead
        <input type="number" className="size-in-hectare" />
      </label>

      <button type="submit" className="rent-calculate">PROCEED</button>

    </form>
  );
};

export default RentForm;
