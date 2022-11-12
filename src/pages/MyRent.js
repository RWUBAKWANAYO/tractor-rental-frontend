import React from 'react';
import '../assets/styles/myrent.scss';
import tractorimg from '../assets/images/tractor_img.png';
import Button from '../components/ui/Button';

const MyRent = () => (
  <div className="my-rent">
    <div className="my-rent-list">
      {Array.from(Array(8).keys()).map((tractor) => (
        <div className="rent-card" key={tractor}>
          <div>
            <img src="https://cdn.britannica.com/13/100513-050-1DB2C84D/Tractor-loader.jpg" alt="tractor" />
            <span>
              <h3>John Dreller</h3>
              <p>20 December 2022</p>
            </span>
          </div>

          <h1>
            <sup>RWF</sup>
            85000
          </h1>
          <Button name="view more" styleclass="light-btn" />
        </div>
      ))}
    </div>
    <div className="my-rent-desc">
      <div className="my-rent-desc-cont">
        <img src="https://cdn.britannica.com/13/100513-050-1DB2C84D/Tractor-loader.jpg" alt="tractor" />
        <div>
          <h3>Tractor Info</h3>
          <ul>
            <li>
              Tractor name:
              John Dreel
            </li>
            <li>
              Price of rent:
              85000Rwf
            </li>
            <li>
              Working hours:
              8hrs per day
            </li>
            <li>
              Daily completion:
              10 hectare
            </li>
          </ul>
          <hr />
          <h3>Rent Info</h3>
          <ul>
            <li>
              Size of the land:
              600m - 100m
            </li>
            <li>
              Expected time:
              8 days
            </li>
            <li>
              Amount to pay:
              85000 RWF
            </li>
            <li>
              Date of Rent:
              20 December 2021
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MyRent;
