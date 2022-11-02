import React from 'react';
import { ArrowLeft } from '../../../assets/svg';
import TractorCard from '../../tractorcard/TractorCard';
import bg from '../../../assets/images/bg3.png';
import './popular.scss';

const Popular = () => {
  const tractors = [
    {
      id: 1, name: 'John Dreel', image_url: 'tractor', rent: 5, description: 'printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 2, name: 'John Dreel', image_url: 'tractor', rent: 5, price: 85000, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 3, name: 'John Dreel', image_url: 'tractor', rent: 5, price: 85000, description: 'Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 4, name: 'John Dreel', image_url: 'tractor', rent: 5, price: 85000, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 5, name: 'John Dreel', image_url: 'tractor', rent: 5, price: 85000, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 6, name: 'John Dreel', image_url: 'tractor', rent: 5, price: 85000, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 7, name: 'John Dreel', image_url: 'tractor', rent: 5, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 8, name: 'John Dreel', image_url: 'tractor', rent: 5, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
    {
      id: 9, name: 'John Dreel', image_url: 'tractor', rent: 5, description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
    },
  ];

  return (
    <div className="popular-cont">
      <img src={bg} alt="svg" className="popular-bg" />
      <h1>Most popular</h1>

      <div className="popular-cards-cont">
        <div className="popular-arrow">
          <ArrowLeft color="#192f51" />
        </div>
        {tractors.slice(0, 4).map((tractor) => <TractorCard key={tractor.id} tractor={tractor} />)}
      </div>
    </div>
  );
};

export default Popular;
