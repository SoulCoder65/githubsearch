import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextData} from "./context"
ReactDOM.render(
  <React.StrictMode>
  <ContextData>
    <App />
    </ContextData>
  </React.StrictMode>,
  document.getElementById('root')
);

