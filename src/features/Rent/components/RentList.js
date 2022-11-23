import React, { useEffect } from 'react';
import Button from '../../../components/ui/Button';
import DateFormat from '../../../utils/DateFormat';
import './rent.scss';

const RentList = ({ handleData, allrents }) => {
  useEffect(() => { handleData({ data: allrents.data[0] }); }, []);

  return (
    <div className="my-rent-list">
      {allrents.data.map((item) => (
        <div className="rent-card" key={item.rent.id}>
          <div className="rent-card-cont">
            <div>
              <img src={item.tractor.photo} alt="tractor" />
              <span>
                <h3>{item.tractor.name}</h3>
                <p>{DateFormat(item.rent.rent_date)}</p>
              </span>
            </div>
            <h1>
              <sup>RWF</sup>
              {item.rent.total_costs}
            </h1>
          </div>
          <div
            onClick={() => handleData({ status: true, data: item })}
            aria-hidden="true"
            className="myrent-open-btn"
          >
            <Button name="view more" styleclass="blue-btn" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentList;
