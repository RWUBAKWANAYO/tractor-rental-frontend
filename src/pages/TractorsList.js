import React, { useEffect, useState } from 'react';
import '../assets/styles/tractorslist.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAllTractors } from '../features/Tractors/services';
import { ArrowCircleIcon } from '../assets/svg';
import { TractorCard } from '../components/ui/Card';
import {
  SearchTractorsName, FilterTractorsPrice, PopularTractorsButton, AllTractorsButton,
} from '../features/Tractors';

const TractorsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alltractors = useSelector((state) => state.alltractors);
  const populartractors = useSelector((state) => state.populartractors);

  const [result, setResult] = useState(alltractors);
  const [filters, setFilters] = useState(false);

  const handleNavigate = (id) => navigate(`/tractors/${id}`);

  useEffect(() => { dispatch(FetchAllTractors()); }, []);
  useEffect(() => { setResult(alltractors); }, [alltractors]);
  useEffect(() => { setResult(populartractors); }, [populartractors]);

  return (
    <>
      { result.status === 'ok-exist' && (
      <div className="list-cont">
        <div className="filters-cont">
          <div className="filters-title">
            <h2>Search Tractors by name, price, trends.</h2>
            <button type="button" onClick={() => setFilters(!filters)} aria-hidden="true">
              Search
              <i style={{ transform: `${filters ? 'rotate(90deg)' : ''}` }}><ArrowCircleIcon color="#fafbfa" /></i>
            </button>
          </div>

          <div className="tractors-list-bar" style={{ display: `${filters ? 'flex' : ''}` }}>
            <div className="list-filter-inputs">
              <SearchTractorsName />
              <FilterTractorsPrice />
            </div>
            <div className="list-filter-buttons">
              <PopularTractorsButton />
              <AllTractorsButton />

            </div>
          </div>
        </div>

        <div className="list-cards-cont">
          {result.data.map((tractor) => (
            <div
              className="list-card"
              key={tractor.id}
              onClick={() => handleNavigate(tractor.id)}
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
