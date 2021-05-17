import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
