import React from 'react';

import { BookProvider } from '../context/BookContext';

const AppProvider: React.FC = ({ children }) => {
  return <BookProvider>{children}</BookProvider>;
};

export default AppProvider;
