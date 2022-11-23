import React from 'react';
import Button from '../../../components/ui/Button';
import DateFormat from '../../../utils/DateFormat';
import './rent.scss';

const RentDescription = ({ details, handleData }) => {
  const { tractor, rent } = details.data;
  const handleClick = () => handleData({ status: false });
  return (
    <div className="my-rent-desc" style={{ display: `${details.status ? 'flex' : ''}` }}>
      <div className="my-rent-desc-cont">
        <img src={tractor.photo} alt="tractor" />
        <div>
          <h3>Tractor Info</h3>
          <ul>
            <li>{`Tractor name: ${tractor.name}`}</li>
            <li>
              {`Price of rent:${rent.new_farm ? tractor.new_farm_price : tractor.price}`}
            </li>
            <li>
              Working hours:
              8hrs per day
            </li>
            <li>{`Daily completion: ${tractor.completetion}`}</li>
          </ul>
          <hr />
          <h3>Rent Info</h3>
          <ul>
            <li>{`Size of the land: ${rent.farm_size}`}</li>
            <li>
              Expected time:
              8 days
            </li>
            <li>{`Amount to pay: ${rent.total_costs}`}</li>
            <li>{`Date of Rent: ${DateFormat(rent.rent_date)}`}</li>
          </ul>
        </div>
        <div className="myrent-close-btn" onClick={handleClick} aria-hidden="true">
          <Button name="Close" styleclass="colored-btn" />
        </div>
      </div>
    </div>
  );
};

export default RentDescription;
