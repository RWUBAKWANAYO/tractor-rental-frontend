import React, { useEffect } from 'react';
import '../tractors.scss';
import { SearchIcon } from '../../../assets/svg';

const SearchTractor = () => {
  useEffect(() => {

  }, []);
  return (
    <div className="search-tractor-cont">
      Search by name
      <div>
        <SearchIcon color="#192f5133" />
        <input type="search" placeholder="example:john deere..." />
        <button type="button">Apply</button>
      </div>
    </div>
  );
};

export default SearchTractor;
