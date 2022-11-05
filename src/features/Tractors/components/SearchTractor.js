import React from 'react';
import '../tractors.scss';
import { SearchIcon } from '../../../assets/svg';

const SearchTractor = () => (
  <div className="search-tractor-cont">
    <input type="search" placeholder="Search tractor by name" />
    <SearchIcon color="#abbc41" />
  </div>
);

export default SearchTractor;
