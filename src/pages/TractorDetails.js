import React from 'react';
import tractorimg from '../assets/images/tractor_img.png';
import Button from '../components/ui/Button';
import '../assets/styles/tractordetails.scss';
import { NewRent } from '../features/Rent/components';
import WarningCard from '../components/ui/Card/WarningCard';
import { RentalWarning } from '../data/Warning.constants';

const TractorDetails = () => (
  <div className="tractor-details-cont">
    <div className="tractor-details-img">
      <img src={tractorimg} alt="tractor" />
    </div>
    <div className="tractor-details-desc">
      <h1>John Dreel</h1>
      <div>
        <h4>DESCRIPTION</h4>
        <p>
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
        </p>
      </div>
      <WarningCard warning={RentalWarning} />
      <div className="details-calculate">
        <h1>
          <sup>RWF</sup>
          85000
        </h1>
        <div><Button name="CALCULATE" styleclass="colored-btn" /></div>
      </div>
      <NewRent />
    </div>
  </div>
);

export default TractorDetails;
