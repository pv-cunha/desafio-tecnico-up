import React from 'react';

import { BookProvider } from '../context/BookContext';
import { AlertProvider } from './AlertContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AlertProvider>
      <BookProvider>{children}</BookProvider>
    </AlertProvider>
  );
};

export default AppProvider;
