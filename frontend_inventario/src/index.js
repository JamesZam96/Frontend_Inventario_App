import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx'
// import axios from 'axios'
// import App from './App';
require('dotenv').config()
// axios.defaults.baseURL='https://backend-inventario-g3.herokuapp.com/'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
      <Router />
  </BrowserRouter>
  , document.getElementById('root')
);


