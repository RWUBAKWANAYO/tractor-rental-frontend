import React from 'react';

const SaveRent = () => (
  <div className="save_rent">
    <h1>Finish the Process</h1>
    <ul>
      <li>
        <b>Tractor name:</b>
        John Dreel
      </li>
      <li>
        <b>Price of rent:</b>
        85000Rwf
      </li>
      <li>
        <b>Working hours:</b>
        8hrs per day
      </li>
      <li>
        <b>Daily completion:</b>
        10 hectare
      </li>
      <li>
        <b>Size of the land:</b>
        600m - 100m
      </li>
    </ul>

    <h5>
      It will take 8 days to complete your farm and total price will be
      {' '}
      <span>500000Rwf</span>
    </h5>
    <button type="submit" className="rent-calculate">RENT NOW</button>
  </div>
);

export default SaveRent;
