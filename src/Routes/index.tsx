import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Training from '../components/Training';
import About from '../components/About';
import Contact from '../components/Contact';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Training />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;