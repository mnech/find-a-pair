import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import AppRouter from './components/router/AppRouter';
import { ErrorBoundary } from './utils/ErrorBoundary';
import { Provider } from 'react-redux';
import registerServiceWorker from './utils/registerSW';
import { setupStore } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker();

const App: React.FC<any> = hot(() => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);
  const store = setupStore();
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
});

export default App;
