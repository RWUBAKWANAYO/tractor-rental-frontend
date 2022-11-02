import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
