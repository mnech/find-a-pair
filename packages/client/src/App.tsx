import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './utils/registerSW';
import { staticRoutes } from './utils/Routes';
import AppRouter from './components/router/AppRouter';

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

  return <AppRouter />;
}

export default App;
