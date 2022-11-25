/* eslint-disable consistent-return */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GetUser } from './useLocalStorage';

export const RequireAuth = () => {
  const user = GetUser();
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export const RequireNoAuth = () => {
  const user = GetUser();
  if (user) return <Navigate to={-1} />;
  return <Outlet />;
};
