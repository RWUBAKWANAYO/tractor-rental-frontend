import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastifyContainer = () => (
  <ToastContainer
    hideProgressBar={false}
    newestOnTop={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

let toastId = null;
export const ToastifyFunc = (status, message) => {
  if (status === 'pending') {
    const render = message || 'Plese Wait...';
    toastId = toast.loading(render);
  }
  if (status === 'dismiss') return toast.dismiss();

  if (status === 'ok') {
    const render = message || 'Success!';
    return toast.update(toastId, {
      render,
      type: toast.TYPE.SUCCESS,
      isLoading: false,
      toastId: status,
      autoClose: 3000,
      closeOnClick: true,
    });
  }

  if (status === 'error') {
    const render = message || 'Something went wrong!';
    return toast.update(toastId, {
      render,
      type: toast.TYPE.ERROR,
      isLoading: false,
      toastId: status,
      autoClose: 3000,
      closeOnClick: true,
    });
  }
  return status;
};
