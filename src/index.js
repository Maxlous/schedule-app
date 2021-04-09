import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import DashboardContext from './context/DashboardContext';

ReactDOM.render(
  <React.StrictMode>
    <DashboardContext>
      <App />
    </DashboardContext>
  </React.StrictMode>,
  document.getElementById('root')
);

