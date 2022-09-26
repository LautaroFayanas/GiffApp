import React from 'react';
import ReactDOM from 'react-dom/client';
import { GiffApp } from './GiffApp';
import  'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GiffApp />
  </BrowserRouter>
);
