import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Navbar from './components/layout/Navbar';
import AppProvider from './context';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Router />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
