import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
