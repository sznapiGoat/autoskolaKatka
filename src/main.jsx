import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './app';
import { Privacy } from './privacy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zasady-soukromi" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
