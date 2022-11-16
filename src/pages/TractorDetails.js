import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTractor } from '../features/Tractors/services';
import Button from '../components/ui/Button';
import '../assets/styles/tractordetails.scss';
import { NewRent } from '../features/Rent/components';
import WarningCard from '../components/ui/Card/WarningCard';
import { RentalWarning } from '../data/Warning.constants';
import tractorimg from '../assets/images/tractor_img.png';

const TractorDetails = () => {
  const [rent, setRent] = useState(true);
  const ShowRent = (bool) => setRent(bool);
  const { tractorId } = useParams();

  const dispatch = useDispatch();
  const tractor = useSelector((state) => state.tractor);
  useEffect(() => { dispatch(FetchTractor(tractorId)); }, []);

  return (
    <>
      {tractor.status === 'ok-exist' && (
      <div className="tractor-details-cont">
        <div className="tractor-details-img">
          <img src={tractorimg} alt="tractor" />
        </div>
        <div className="tractor-details-desc">
          <h1>{tractor.data.name}</h1>
          <div>
            <h4>DESCRIPTION</h4>
            <p>{tractor.data.description}</p>
            <h5>{`Daily completion: ${tractor.data.completion} hectare`}</h5>
            <h5>{`Popularity: ${tractor.data.demand} demands`}</h5>
          </div>
          <WarningCard warning={RentalWarning} />
          <div className="details-calculate">
            <h1>
              <sup>RWF</sup>
              {tractor.data.price}
            </h1>
            <div onClick={() => ShowRent(true)} aria-hidden="true">
              <Button name="CALCULATE" styleclass="colored-btn" />
            </div>
          </div>
          {rent && <NewRent ShowRent={ShowRent} />}
        </div>
      </div>
      )}
    </>
  );
};

export default TractorDetails;
