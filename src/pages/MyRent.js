import React, { useEffect, useState } from 'react';
import '../features/Rent/components/rent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RentDescription, RentList } from '../features/Rent';
import { FetchAllRents } from '../features/Rent/services';
import { MyRentSkeleton } from '../components/ui/Skeleton';
import APIAlert from '../components/ui/APIAlert';
import { EmptyListAlert, ErrorAlert } from '../data/Alerts.constants';
import ScrollPage from '../utils/ScrollPage';

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

  useEffect(() => { ScrollPage(); dispatch(FetchAllRents()); }, []);

  return (
    <div className="my-rent">
      {allrents.status === 'ok-exist' && <RentList handleData={handleData} allrents={allrents} />}
      {details.data && <RentDescription details={details} handleData={handleData} />}
      {allrents.status === 'pending' && (<MyRentSkeleton />)}
      {allrents.status === 'ok-empty' && (<APIAlert data={EmptyListAlert('rent')} />)}
      {allrents.status === 'error' && (<APIAlert data={ErrorAlert()} />)}
    </div>
  );
};

export default MyRent;
