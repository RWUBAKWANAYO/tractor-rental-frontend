import React from 'react';
import '../assets/styles/tractorslist.scss';
import { TractorCard } from '../components/ui/Card';
import { SearchTractor, FilterTractor } from '../features/Tractors';

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
      <div className="tractors-list-bar">
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
