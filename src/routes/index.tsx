import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from '../pages/Books';

import Home from '../pages/Home';
import SingleBook from '../pages/SingleBook';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
    </Routes>
  );
};

export default Router;
