import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Home from '../pages/Home';
import SingleBook from '../pages/SingleBook';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Dashboard />} />
      <Route path="/books/:id" element={<SingleBook />} />
    </Routes>
  );
};

export default Router;
