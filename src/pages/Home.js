import React from 'react';
import '../assets/styles/home.scss';
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
          <ArrowLeftIcon color="#1f675e" />
        </div>
        {TractorsData
          .slice(0, 4)
          .map((tractor) => <TractorCard key={tractor.id} tractor={tractor} />)}
      </div>
    </div>
  </section>
);

export default Home;
