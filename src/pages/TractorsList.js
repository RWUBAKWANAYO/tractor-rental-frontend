import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/tractorslist.scss';
import { ArrowCircleIcon, ClearFilterIcon, TrendIcon } from '../assets/svg';
import { TractorCard } from '../components/ui/Card';
import { SearchTractor, FilterTractor } from '../features/Tractors';
import { FetchAllTractors } from '../features/Tractors/services';

const TractorsList = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/tractors/${id}`);
  const dispatch = useDispatch();
  const tractors = useSelector((state) => state.alltractors);
  const [result, setResult] = useState(tractors);

  useEffect(() => { dispatch(FetchAllTractors()); }, []);
  useEffect(() => { setResult(tractors); }, [tractors]);

  const [filters, setFilters] = useState(false);

  return (
    <>
      { result.status === 'ok-exist' && (
      <div className="list-cont">
        <div className="filters-title">
          <h2>Find Tractors by name, price, popularity.</h2>
          <button type="button" onClick={() => setFilters(!filters)} aria-hidden="true">
            Find now
            <i style={{ transform: `${filters ? 'rotate(90deg)' : ''}` }}><ArrowCircleIcon /></i>
          </button>
        </div>
        <div className="tractors-list-bar" style={{ display: `${filters ? 'flex' : ''}` }}>
          <div className="list-filter-inputs">
            <SearchTractor />
            <FilterTractor />
          </div>
          <div className="list-filter-buttons">
            <button type="button" className="popular-tractors-filters">
              <TrendIcon color="#192f51" />
              Popular
            </button>

            <button type="button" className="clear-tractors-filters">
              <ClearFilterIcon color="#192f51" />
              Reset
            </button>
          </div>

        </div>
        <div className="list-cards-cont">
          {result.data.map((tractor) => (
            <div
              className="list-card"
              key={tractor.id}
              onClick={() => handleClick(tractor.id)}
              aria-hidden="true"
            >
              <TractorCard tractor={tractor} />
            </div>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

export default TractorsList;
