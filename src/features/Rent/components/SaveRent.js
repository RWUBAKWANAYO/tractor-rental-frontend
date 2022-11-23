import React from 'react';
import { useDispatch } from 'react-redux';
import DateFormat from '../../../utils/DateFormat';
import { CreateRent } from '../services';

const SaveRent = ({ tractorData, rentData }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // eslint-disable-next-line camelcase
    const {
      new_farm, farm_size, total_costs, rent_date, estimated_time,
    } = rentData;

    dispatch(CreateRent({
      tractor_id: tractorData.id, new_farm, farm_size, total_costs, rent_date, estimated_time,
    }));
  };

  return (
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
          {DateFormat(rentData.rent_date)}
        </li>
      </ul>
      <h5 id="saverent-costs">
        It will take
        {` ${rentData.estimated_time} days `}
        to complete your farm and total price will be
        <span>{` ${rentData.total_costs} RWF`}</span>
      </h5>
      <button type="submit" className="rent-calculate" onClick={handleClick}>Rent now</button>
    </div>
  );
};

export default SaveRent;
