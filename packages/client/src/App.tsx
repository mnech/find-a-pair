import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRouter from './components/router/AppRouter'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

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
