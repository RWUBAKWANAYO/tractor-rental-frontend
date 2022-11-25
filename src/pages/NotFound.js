import React from 'react';
import { toast } from 'react-toastify';
import APIAlert from '../components/ui/APIAlert';
import {
  FiltersSkeleton, HomeTractorsSkeleton,
  ListTractorsSkeleton, MyRentSkeleton, TractorDetailsSkeleton,
} from '../components/ui/Skeleton';
import { ToastifyFunc } from '../lib/ToastifyLoaders';

const NotFound = () => {
  // const id = toast.loading('Wait....');
  const wab = '';
  const toastId = React.useRef(null);
  // const toastId = React.useRef(null);

  const notify = () => toastId.current = toast.loading('Wait....');

  const update = () => toast.update(toastId.current, { type: toast.TYPE.INFO, autoClose: 5000, isLoading: false });

  // const notify = () => {
  //   if (!toast.isActive(toastId.current)) {
  //     toastId.current = toast('I cannot be duplicated!');
  //   }
  return (
    <>
      <br />
      <button onClick={notify}>Notify</button>
      <button onClick={update}>Notify</button>
      <br />
      <button
        type="button"
        onClick={() => toast.update(id, {
          render: 'succes',
          type: 'success',
          autoClose: 3000,
          isLoading: false,
        })}
      >
        Test
      </button>
      <br />
      <button
        type="button"
        onClick={() => toast('🦄 Wow so easy!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })}
      >
        Test2

      </button>
      <br />
      <button type="button" onClick={() => ToastifyFunc('pending', 'wait for data')}>Test3</button>
      <button type="button" onClick={() => ToastifyFunc('ok')}>Test4</button>
      <button type="button" onClick={() => ToastifyFunc('error')}>Test4</button>
      <br />
      <APIAlert data={{ status: 'error', title: 'Error!', message: 'Something went wrong' }} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeTractorsSkeleton />
      <br />
      <br />
      <br />
      <FiltersSkeleton />
      <br />
      <ListTractorsSkeleton />
      <br />
      <br />
      <br />
      <TractorDetailsSkeleton />

      <br />
      <br />
      <br />
      <MyRentSkeleton />
      <br />
      <br />
      <br />

    </>
  );
};

export default NotFound;
