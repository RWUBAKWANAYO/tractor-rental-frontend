import React, { useEffect } from 'react';
import '../assets/styles/home.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import heroBg from '../assets/images/bg1.png';
import procedureBg from '../assets/images/bg2.png';
import popularBg from '../assets/images/bg3.png';
import Button from '../components/ui/Button';
import { HeroDesc, ProcedureData } from '../data/Home.constants';
import { ArrowCircleIcon } from '../assets/svg';
import TractorCard from '../components/ui/Card/TractorCard';
import { ProcedureCard } from '../components/ui/Card';
import { FetchPopularTractors } from '../features/Tractors/services';
import ScrollPage from '../utils/ScrollPage';
import { HomeTractorsSkeleton } from '../components/ui/Skeleton';
import APIAlert from '../components/ui/APIAlert';
import { EmptyListAlert, ErrorAlert } from '../data/Alerts.constants';
import Carousel from '../components/ui/Carousel';

const Home = () => {
  const dispatch = useDispatch();
  const populartractors = useSelector((state) => state.populartractors);

  useEffect(() => {
    ScrollPage();
    dispatch(FetchPopularTractors());
  }, []);

  return (
    <section className="home-content">
      <div className="hero-cont">
        <div className="hero-bg"><img src={heroBg} alt="bg" /></div>
        <div className="hero-wrapper">
          <div className="hero-desc">
            <h1>TractorRental</h1>
            <p>{HeroDesc}</p>
            <NavLink to="/tractors"><Button name="Rent now" styleclass="curved-btn" /></NavLink>
          </div>
          <div className="hero-img"><Carousel /></div>
        </div>
      </div>

      <div className="procedure-cont">
        <img src={procedureBg} alt="svg" className="procedure-bg" />
        <h1>How does it work</h1>
        <div className="procedure-cards-cont">
          {ProcedureData.map((data) => <ProcedureCard key={data.id} data={data} />)}
        </div>
      </div>

      <div className="popular-cont">
        <img src={popularBg} alt="svg" className="popular-bg" />
        <h1>Most popular</h1>
        { populartractors.status === 'ok-exist' && (
        <div className="popular-cards-cont">
          <div className="popular-arrow">
            <NavLink to="/tractors">
              <ArrowCircleIcon color="#192f51" />
            </NavLink>
          </div>
          {populartractors.data.slice(0, 5).map((tractor) => (
            <TractorCard key={tractor.id} tractor={tractor} />))}
        </div>
        )}
        {populartractors.status === 'pending' && (<HomeTractorsSkeleton />)}
        {populartractors.status === 'ok-empty' && (<APIAlert data={EmptyListAlert('tractor')} />)}
        {populartractors.status === 'error' && (<APIAlert data={ErrorAlert()} />)}
      </div>
    </section>
  );
};

export default Home;
