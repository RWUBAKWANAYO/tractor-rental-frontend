import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import { ToastifyContainer } from '../lib/ToastifyLoaders';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyRent from '../pages/MyRent';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import TractorDetails from '../pages/TractorDetails';
import TractorsList from '../pages/TractorsList';
import UpdateProfile from '../pages/UpdateProfile';

const App = () => (
  <div className="app">
    <ToastifyContainer />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/tractors" element={<TractorsList />} />
          <Route exact path="/tractors/:tractorId" element={<TractorDetails />} />
          <Route exact path="/myrent" element={<MyRent />} />
        </Route>
        <Route exact path="/update_profile" element={<UpdateProfile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
