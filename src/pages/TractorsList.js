import React, { useEffect, useState } from 'react';
import '../assets/styles/tractorslist.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowCircleIcon } from '../assets/svg';
import { TractorCard } from '../components/ui/Card';
import {
  SearchTractorsName, FilterTractorsPrice, PopularTractorsButton, AllTractorsButton,
} from '../features/Tractors';
import ScrollPage from '../utils/ScrollPage';
import { FetchAllTractors } from '../features/Tractors/services';
import { ListTractorsSkeleton } from '../components/ui/Skeleton';
import APIAlert from '../components/ui/APIAlert';
import { EmptyListAlert, ErrorAlert } from '../data/Alerts.constants';

const TractorsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alltractors = useSelector((state) => state.alltractors);
  const populartractors = useSelector((state) => state.populartractors);
  const tractorsbyprice = useSelector((state) => state.tractorsbyprice);
  const tractorsbyname = useSelector((state) => state.tractorsbyname);

  const [result, setResult] = useState(alltractors);
  const [filters, setFilters] = useState(false);

  const handleNavigate = (id) => navigate(`/tractors/${id}`);
  const handleAllTractors = () => dispatch(FetchAllTractors());

  useEffect(() => { setResult(alltractors); }, [alltractors]);
  useEffect(() => { setResult(populartractors); }, [populartractors]);
  useEffect(() => { setResult(tractorsbyprice); }, [tractorsbyprice]);
  useEffect(() => { setResult(tractorsbyname); }, [tractorsbyname]);
  useEffect(() => { ScrollPage(); handleAllTractors(); }, []);
  return (
    <div className="list-cont">
      {result.status !== 'error' && (
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
            <SearchTractorsName tractors={alltractors} />
            <FilterTractorsPrice />
          </div>
          <div className="list-filter-buttons">
            <PopularTractorsButton />
            <AllTractorsButton handleAllTractors={handleAllTractors} />
          </div>
        </div>
      </div>
      )}
      {result.status === 'ok-exist' && (
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
      )}
      {result.status === 'pending' && (<ListTractorsSkeleton />)}
      {result.status === 'ok-empty' && (<APIAlert data={EmptyListAlert('tractor')} />)}
      {result.status === 'error' && (<APIAlert data={ErrorAlert()} />)}
    </div>
  );
};

export default TractorsList;
