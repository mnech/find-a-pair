import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/router/AppRouter';
import { Provider } from 'react-redux'
import { store } from './store'

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
      <Provider store={store}>
        <div className="App">
          <AppRouter />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
