import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import { ErrorBoundary } from './utils/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store';
import registerServiceWorker from './utils/registerSW';

registerServiceWorker();

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <AppRouter />
          </div>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
