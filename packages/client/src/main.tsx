import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import registerServiceWorker from './utils/registerSW';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store';

registerServiceWorker();

const initialState = window.initialState;

delete window.initialState;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={setupStore(initialState)}>
      <App />
    </Provider>
  </BrowserRouter>,
);
