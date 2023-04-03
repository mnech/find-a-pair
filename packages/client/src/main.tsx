import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import registerServiceWorker from './utils/registerSW';
import 'bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker();

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
