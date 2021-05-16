import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Navbar from './components/Navbar';

// interface ImagesLinks {
//   smallThumbnail: string;
//   thumbnail: string;
// }

// interface Volumes {
//   id: string;
//   volumeInfo: {
//     title: string;
//     description: string;
//     infoLink: string;
//     imageLinks: ImagesLinks;
//   };
// }

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
