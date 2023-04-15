import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/router/AppRouter';
import { useRedirectWithAuth } from './hooks/useRedirectWithAuth';
import registerServiceWorker from './utils/registerSW';

registerServiceWorker();

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      console.log({ url });
      if (__SERVER_PORT__) {
        await fetch(url);
      }
    };

    fetchServerData();
  }, []);
  useRedirectWithAuth();
  return <AppRouter />;
}

export default App;
