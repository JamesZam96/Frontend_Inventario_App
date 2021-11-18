import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx'
// import App from './App';
require('dotenv').config()


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
      <Router />
  </BrowserRouter>
  , document.getElementById('root')
);


