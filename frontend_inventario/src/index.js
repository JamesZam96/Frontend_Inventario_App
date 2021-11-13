import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx'
require('dotenv').config()
// import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
      <Router />
  </BrowserRouter>
  , document.getElementById('root')
);


