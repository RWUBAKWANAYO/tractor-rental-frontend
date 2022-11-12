import React from 'react';
import { MoneyIcon } from '../../../assets/svg';
import '../tractors.scss';

const FilterTractor = () => (
  <div className="filter-tractor-cont">
    <label htmlFor="price">
      Filter by price range
      <div className="filter-tractor-inputs">
        <MoneyIcon color="#abbc41" />
        <input type="number" placeholder="from..." />
        <hr />
        <input type="number" placeholder="up to..." />
        <button type="button">Apply</button>
      </div>
    </label>
  </div>
);

export default FilterTractor;
