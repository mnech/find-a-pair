import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/router/AppRouter';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  )
  
}

export default App
