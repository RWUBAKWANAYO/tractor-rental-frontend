import React from 'react';
import './skeleton.scss';
import CardSkeleton from './CardSkeleton';

export const HomeTractorsSkeleton = () => (
  <div className="hm-skeleton-cont">
    {Array.from(Array(4).keys()).map((cardEl) => (
      <div className="card-skeleton" key={cardEl}>
        <div className="large-bar" />
        <div className="medium-bar" />
        {Array.from(Array(4).keys()).map((smallEl) => (
          <div className="small-bar" key={smallEl} />
        ))}
      </div>
    ))}
  </div>
);

export const ListTractorsSkeleton = () => (
  <div className="list-skeleton-cont">
    {Array.from(Array(12).keys()).map((cardEl) => (
      <div className="card-skeleton" key={cardEl}>
        <div className="large-bar" />
        <div className="medium-bar" />
        {Array.from(Array(4).keys()).map((smallEl) => (
          <div className="small-bar" key={smallEl} />
        ))}
      </div>
    ))}
  </div>
);

export const FiltersSkeleton = () => (
  <div className="fileters-skeleton">
    {Array.from(Array(4).keys()).map((inputEl) => (
      <div className="input-bar" key={inputEl}>
        <div className="small-bar" />
        <div className="medium-bar" />
      </div>
    ))}
  </div>
);
export const TractorDetailsSkeleton = () => (
  <div className="details-skeleton">
    <div className="details-skeleton-img">
      <div className="large-bar" />
    </div>
    <div className="details-skeleton-desc">
      <div className="large-bar" />
      {Array.from(Array(12).keys()).map((smallEl) => (
        <div className="medium-bar" key={smallEl} />
      ))}
      <div className="large-bar" />
    </div>
  </div>
);

export const MyRentSkeleton = () => (
  <div className="myrent-skeleton">
    <div className="rent-list-skeleton">
      {Array.from(Array(6).keys()).map((cardEl) => (
        <div className="rent-card-skeleton" key={cardEl}>
          <div className="large-bar" />
          <div className="medium-bar" />
          <div className="small-bar" />
        </div>
      ))}
    </div>
    <div className="rent-desc-skeleton">
      <div className="large-bar" />
      <div className="medium-bar" />
      {Array.from(Array(5).keys()).map((smallEl) => (
        <div className="small-bar" key={smallEl} />
      ))}
      <br />
      <div className="medium-bar" />
      {Array.from(Array(5).keys()).map((smallEl) => (
        <div className="small-bar" key={smallEl} />
      ))}
    </div>
  </div>
);
