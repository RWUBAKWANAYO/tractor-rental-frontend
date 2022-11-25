import React from 'react';
import './carousel.scss';
import add1 from '../../../assets/images/add1.png';
import add2 from '../../../assets/images/add2.png';
import add3 from '../../../assets/images/add3.png';

const Carousel = () => (
  <div className="adds-cont">
    <div className="adds-shadow" />
    <div className="adds-img">
      <img src={add1} alt="add" className="add add1" />
      <img src={add2} alt="add" className="add add2" />
      <img src={add3} alt="add" className="add add3" />
    </div>
  </div>
);

export default Carousel;
