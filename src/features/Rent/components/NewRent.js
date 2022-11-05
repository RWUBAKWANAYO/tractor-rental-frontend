import React from 'react';
import { CrossIcon } from '../../../assets/svg';
import RentForm from './RentForm';
// import RentCard from './RentCards/RentCard';

const NewRent = () => (
  <div className="new-rental-cont">
    <div className="new-rental-wrapper">
      <i><CrossIcon color="#1f675e" /></i>
      <h1>Basic Information</h1>
      <p>Please provide size of the land to get total cost</p>
      <RentForm />
    </div>
    {/* <div className="new-rental-wrapper"><RentCard /></div> */}
  </div>
);

export default NewRent;
