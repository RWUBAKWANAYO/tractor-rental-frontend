import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = () => (
  <>
    <Navbar />
    <section><Outlet /></section>
    <Footer />
  </>
);

export default Layout;
