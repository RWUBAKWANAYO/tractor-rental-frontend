import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './rent.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CrossIcon } from '../../../assets/svg';
import SaveRent from './SaveRent';
import RentForm from './RentForm';
import { ResetNewRent } from '../services';

const NewRent = ({ ShowRent, tractorData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newrent = useSelector((state) => state.newrent);
  const [visible, setVisible] = useState(true);
  const [rentData, setRentData] = useState({});

  const handleRent = (data) => {
    setRentData(data);
    setVisible(!visible);
  };

  useEffect(() => {
    if (newrent.data) {
      dispatch(ResetNewRent());
      navigate('/myrent');
    }
  }, [newrent]);

  return (
    <div className="new-rental-cont">
      <i className="rent-close" onClick={() => ShowRent(false)} aria-hidden="true">
        <CrossIcon color="#192f51" />
      </i>
      {visible && (
      <div className="new-rental-wrapper">
        <RentForm handleRent={handleRent} tractorData={tractorData} />
      </div>
      )}

      {!visible && (
      <div className="new-rental-wrapper">
        <SaveRent tractorData={tractorData} rentData={rentData} />
      </div>
      )}
    </div>
  );
};

NewRent.propTypes = {
  ShowRent: PropTypes.func.isRequired,
  tractorData: PropTypes.shape({}),
};
NewRent.defaultProps = {
  tractorData: {},
};

export default NewRent;
