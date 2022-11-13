import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/tractorslist.scss';
import { ClearFilterIcon } from '../assets/svg';
import { TractorCard } from '../components/ui/Card';
import { SearchTractor, FilterTractor } from '../features/Tractors';
import { FetchAllTractors } from '../features/Tractors/services';

const TractorsList = () => {
  const dispatch = useDispatch();
  const tractors = useSelector((state) => state.alltractors);
  const [result, setResult] = useState(tractors);

  useEffect(() => { dispatch(FetchAllTractors()); }, []);
  useEffect(() => { setResult(tractors); }, [tractors]);

  return (
    <>
      { result.status === 'ok-exist' && (
      <div className="list-cont">
        <div className="tractors-list-bar">
          <SearchTractor />
          <FilterTractor />
          <button type="button" className="clear-tractors-filters">
            <ClearFilterIcon color="#fafbfa" />
            Reset
          </button>
        </div>
        <div className="list-cards-cont">
          {result.data.map((tractor) => (
            <div className="list-card" key={tractor.id}>
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
