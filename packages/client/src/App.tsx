import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Profile } from './pages/Profile'
import SignUp from './pages/SignUp/SignUp'

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
  return <div className="App h-100">
    {/*TODO это должно быть в роуте <Profile/>*/}
    {/*TODO <SignUp />*/}
  </div>
}

export default App
