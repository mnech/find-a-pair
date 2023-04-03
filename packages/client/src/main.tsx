import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import registerServiceWorker from './utils/registerSW';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from './utils/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

registerServiceWorker();

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
