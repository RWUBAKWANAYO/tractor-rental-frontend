import React from 'react';

const SaveRent = ({ tractorData, rentData }) => (

  <div className="save_rent">
    <h1>Finish the Process</h1>
    <ul>
      <li>
        <b>Tractor name:</b>
        {tractorData.name}
      </li>
      <li>
        <b>Price of rent:</b>
        {rentData.new_farm ? `${tractorData.new_farm_price}Rwf` : `${tractorData.price} Rwf`}
      </li>
      <li>
        <b>Working hours:</b>
        8hrs per day
      </li>
      <li>
        <b>Daily completion:</b>
        {`${tractorData.completion} per day`}
      </li>
      <li>
        <b>Size of the land:</b>
        {rentData.farm_size}
      </li>
      <li>
        <b>Is a farm new ?</b>
        {rentData.new_farm ? 'yes' : 'No'}
      </li>
      <li>
        <b>Date of rent:</b>
        {rentData.rent_date}
      </li>
    </ul>

    <h5>
      It will take
      {' '}
      {rentData.estimated_time}
      {' '}
      to complete your farm and total price will be
      {' '}
      <span>{rentData.total_cost}</span>
    </h5>
    <button type="submit" className="rent-calculate">Rent now</button>
  </div>
);

export default SaveRent;
