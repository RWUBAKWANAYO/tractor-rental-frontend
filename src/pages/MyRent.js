import React, { useEffect, useState } from 'react';
import '../features/Rent/components/rent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RentDescription, RentList } from '../features/Rent';
import { FetchAllRents } from '../features/Rent/services';

const MyRent = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({ status: false, data: null });
  const allrents = useSelector((state) => state.allrents);

  const handleData = (action) => {
    if (action.data && !action.status) {
      return setDetails({ status: action.status, data: action.data });
    }
    if (action.status && !action.data) {
      return setDetails({ ...details, status: action.status });
    }
    return setDetails({ status: action.status, data: action.data });
  };

  useEffect(() => { dispatch(FetchAllRents()); }, []);

  return (
    <div className="my-rent">
      {allrents.status === 'ok-exist' && <RentList handleData={handleData} allrents={allrents} />}
      {details.data && <RentDescription details={details} handleData={handleData} />}
    </div>
  );
};

export default MyRent;
