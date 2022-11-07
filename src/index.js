import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const d = 15;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App sum={d} />
  </React.StrictMode>
);

