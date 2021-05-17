import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Books from '../pages/Books';
import SingleBook from '../pages/SingleBook';
import Favorites from '../pages/Favorites';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Router;
