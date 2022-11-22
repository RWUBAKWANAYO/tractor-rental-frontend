import React, { useState } from 'react';
import '../tractors.scss';
import { useDispatch } from 'react-redux';
import { MoneyIcon } from '../../../assets/svg';
import { FetchTractorsByPrice } from '../services';

const FilterTractorsPrice = () => {
  const dispatch = useDispatch();
  const [range, setRange] = useState({ from: '', to: '' });
  const handlePrice = ((e) => {
    e.preventDefault();
    dispatch(FetchTractorsByPrice(range));
  });

  return (
    <form className="filter-tractor-cont" onSubmit={handlePrice}>
      Filter by price range
      <div className="filter-tractor-inputs">
        <MoneyIcon color="#192f5133" />
        <input
          type="number"
          placeholder="from..."
          value={range.from}
          required
          onChange={(e) => setRange({ ...range, from: e.target.value })}
        />
        <hr />
        <input
          type="number"
          placeholder="up to..."
          value={range.to}
          required
          onChange={(e) => setRange({ ...range, to: e.target.value })}
        />
        <button type="submit">Apply</button>
      </div>
    </form>
  );
};

export default FilterTractorsPrice;
