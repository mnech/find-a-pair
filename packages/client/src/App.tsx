import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './utils/registerSW';
import AppRouter from './components/router/AppRouter';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:3000`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);

  return <AppRouter />;
}

export default App;
