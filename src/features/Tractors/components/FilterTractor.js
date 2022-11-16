import React from 'react';
import { MoneyIcon } from '../../../assets/svg';
import '../tractors.scss';

const FilterTractor = () => (
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

export default FilterTractor;
