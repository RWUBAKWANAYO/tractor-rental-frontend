import React from 'react';
import './tractorslist.scss';
import TractorCard from '../../../../components/tractorcard/TractorCard';
import bg from '../../../../assets/images/bg3.png';
import SearchTractor from './SearchTractor';
import FilterTractor from '../../FilterTractor/FilterTractor';

const TractorsList = () => {
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
    <div className="list-cont">
      <div>
        <SearchTractor />
        <FilterTractor />
      </div>
      <div className="list-cards-cont">
        {tractors.map((tractor) => (
          <div
            className="list-card"
            key={tractor.id}
          >
            <TractorCard tractor={tractor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TractorsList;
