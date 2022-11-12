import React from 'react';
import '../tractors.scss';
import { SearchIcon } from '../../../assets/svg';

const SearchTractor = () => (
  <div className="search-tractor-cont">
    Search by name
    <label htmlFor="name">
      <div>
        <SearchIcon color="#abbc41" />
        <input type="search" placeholder="example:john deere..." />
        <button type="button">Apply</button>
      </div>
    </label>
  </div>
);

export default SearchTractor;
