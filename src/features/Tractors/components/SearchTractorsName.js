import React, { useState } from 'react';
import '../tractors.scss';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../../assets/svg';
import { FilterTractorsByName } from '../services';

const SearchTractorsName = ({ tractors }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(FilterTractorsByName({ tractors, keyword }));
  };
  return (
    <form className="search-tractor-cont" onSubmit={handleSearch}>
      Search by name
      <div>
        <SearchIcon color="#192f5133" />
        <input
          type="search"
          placeholder="example:john deere..."
          required
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Apply</button>
      </div>
    </form>
  );
};

export default SearchTractorsName;
