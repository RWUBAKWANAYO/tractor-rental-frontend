import React from 'react';
import { useDispatch } from 'react-redux';
import { TrendIcon } from '../../../assets/svg';
import { FetchPopularTractors } from '../services';

const PopularTractorsButton = () => {
  const dispatch = useDispatch();
  const handlePopular = () => dispatch(FetchPopularTractors());
  return (
    <button type="button" className="popular-tractors-filters" onClick={handlePopular}>
      <TrendIcon color="#fafbfa" />
      Popular
    </button>
  );
};

export default PopularTractorsButton;
