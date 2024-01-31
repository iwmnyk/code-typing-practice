import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Training from '../components/Training';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
};

export default AppRoutes;