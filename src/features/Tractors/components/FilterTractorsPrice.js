import React from 'react';
import '../tractors.scss';
import { useDispatch } from 'react-redux';
import { MoneyIcon } from '../../../assets/svg';

const FilterTractorsPrice = () => {
  const dispatch = useDispatch();
  const [range, setRange] = useSate({ from: '', to: '' });
  return (
    <div className="filter-tractor-cont">
      Filter by price range
      <div className="filter-tractor-inputs">
        <MoneyIcon color="#192f5133" />
        <input type="number" placeholder="from..." />
        <hr />
        <input type="number" placeholder="up to..." />
        <button type="button">Apply</button>
      </div>
    </div>
  );
};

export default FilterTractorsPrice;
