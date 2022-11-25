import React from 'react';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/footers/MainFooter';
import Navbar from '../components/Navbar';

const Layout = () => (
  <>
    <Navbar />
    <section><Outlet /></section>
    <MainFooter />
  </>
);

export default Layout;
