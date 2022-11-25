import PropTypes from 'prop-types';
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
              {`Price of rent:${rent.new_farm ? tractor.new_farm_price : tractor.price}Rwf`}
            </li>
            <li>{`Daily completion: ${tractor.completion} hectare`}</li>
          </ul>
          <hr />
          <h3>Rent Info</h3>
          <ul>
            <li>{`Is it a new farm: ${rent.new_farm ? 'Yes' : 'No'}`}</li>
            <li>{`Size of the land: ${rent.farm_size}`}</li>
            <li>{`Estimated time: ${rent.estimated_time} days`}</li>
            <li>{`Amount to pay: ${rent.total_costs}Rwf`}</li>
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

RentDescription.propTypes = {
  details: PropTypes.shape({
    data: PropTypes.shape({
      tractor: PropTypes.shape({
        completion: PropTypes.number,
        name: PropTypes.string,
        new_farm_price: PropTypes.number,
        photo: PropTypes.string,
        price: PropTypes.number,
      }),
      rent: PropTypes.shape({
        estimated_time: PropTypes.number,
        farm_size: PropTypes.string,
        new_farm: PropTypes.bool,
        rent_date: PropTypes.string,
        total_costs: PropTypes.number,
      }),
    }),
    status: PropTypes.bool,
  }),
  handleData: PropTypes.func.isRequired,
};

RentDescription.defaultProps = {
  details: {
    data: {
      tractor: {
        completion: 0,
        name: '',
        new_farm_price: 0,
        photo: '',
        price: 0,
      },
      rent: {
        estimated_time: 0,
        farm_size: '',
        new_farm: false,
        rent_date: '',
        total_costs: 0,
      },
    },
    status: false,
  },
};

export default RentDescription;
