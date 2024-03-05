import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import Training from '../components/Training'
import About from '../components/About'
import Contact from '../components/Contact'
import Result from '../components/Result'
import Error from '../components/Error'


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training/:selectedValue" element={<Training />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Error />} />

    </Routes>
  );
};

export default AppRoutes;