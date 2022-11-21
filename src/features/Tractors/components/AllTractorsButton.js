import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearFilterIcon } from '../../../assets/svg';
import { FetchAllTractors } from '../services';

const AllTractorsButton = () => {
  const dispatch = useDispatch();
  const handleClear = () => dispatch(FetchAllTractors());
  return (
    <button type="button" className="clear-tractors-filters" onClick={handleClear}>
      <ClearFilterIcon color="#fafbfa" />
      Reset
    </button>
  );
};

export default AllTractorsButton;
