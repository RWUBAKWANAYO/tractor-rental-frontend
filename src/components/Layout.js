import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <section><Outlet /></section>
    <Footer />
  </>
);

export default Layout;
