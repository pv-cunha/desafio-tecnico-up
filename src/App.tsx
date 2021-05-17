import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Navbar from './components/layout/Navbar';
import AppProvider from './context';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Router />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
