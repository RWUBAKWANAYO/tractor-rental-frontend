import React from 'react';
import '../assets/styles/home.scss';
import { NavLink } from 'react-router-dom';
import heroBg from '../assets/images/bg1.png';
import heroimg from '../assets/images/test1.png';
import procedureBg from '../assets/images/bg2.png';
import popularBg from '../assets/images/bg3.png';
import Button from '../components/ui/Button';
import ProcedureData from '../data/Home.constants';
import { ArrowLeftIcon } from '../assets/svg';
import TractorsData from '../data/TractorsData';
import TractorCard from '../components/ui/Card/TractorCard';
import { ProcedureCard } from '../components/ui/Card';

const Home = () => (
  <section className="home-content">
    <div className="hero-cont">
      <img src={heroBg} alt="bg" className="hero-bg" />
      <div className="hero-wrapper">
        <div className="hero-desc">
          <h1>TractorRental</h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <Button name="Rent now" styleclass="curved-btn" />
        </div>
        <div className="hero-img"><img src={heroimg} alt="tractor" /></div>
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

      <div className="popular-cards-cont">
        <div className="popular-arrow">
          <NavLink to="/tractors">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="27.5" fill="#FAFBFA" stroke="#ABBC41" strokeWidth="15" />
              <path fillRule="evenodd" clipRule="evenodd" d="M24.3293 3.52753C21.902 4.42639 18.6644 5.9373 17.1326 6.88382C12.6994 9.62303 6.65904 16.6191 4.24342 21.8107C2.28349 26.0224 2.01593 27.6428 2.00088 35.373C1.98499 43.5806 2.15974 44.5104 4.67403 49.6493C7.96009 56.3644 14.7011 63.0009 21.422 66.1356C25.683 68.124 27.2349 68.3798 35.0119 68.3765C43.1836 68.374 44.1719 68.1883 49.2883 65.6975C56.0192 62.4198 62.6524 55.6771 65.7503 48.9628C67.6968 44.7437 67.9728 43.073 67.9979 35.373C68.0238 27.1612 67.8524 26.2381 65.3431 21.0966C62.0554 14.3623 55.3035 7.72498 48.6018 4.63877C42.0489 1.62279 30.8512 1.1094 24.3293 3.52753ZM40.4519 27.0165L48.7874 35.3838L40.257 43.9134L31.7275 52.4437L29.6071 50.452C28.4406 49.3558 27.4866 48.0648 27.4866 47.5815C27.4866 47.0982 30.0159 44.1533 33.108 41.0379L38.7294 35.373L33.108 29.7081C30.0159 26.5926 27.4866 23.7004 27.4866 23.2815C27.4866 22.4236 30.8538 18.6501 31.6197 18.6501C31.8931 18.6501 35.8673 22.4152 40.4519 27.0165Z" fill="#ABBC41" />
            </svg>

          </NavLink>
        </div>
        {TractorsData
          .slice(0, 5)
          .map((tractor) => <TractorCard key={tractor.id} tractor={tractor} />)}
      </div>
    </div>
  </section>
);

export default Home;
