import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import AppRouter from './components/router/AppRouter';
import { ErrorBoundary } from './utils/ErrorBoundary';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<any> = hot(() => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <div className="App">
              <AppRouter />
            </div>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
});

export default App;
