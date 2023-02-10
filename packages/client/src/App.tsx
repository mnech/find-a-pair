import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { Profile } from './pages/Profile'
import { Auth } from './pages/Auth/Auth'
import { Leaderboard } from './pages/Leaderboard/Leaderboard'
import { EndGameScreen } from './pages/EndGameScreen/EndGameScreen'

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
    <div className="App">
      {/*TODO это должно быть в роуте <Profile/>*/}
      {/*TODO это должно быть в роуте <Auth/>*/}
      {/*TODO это должно быть в роуте <Leaderboard/>*/}
      {/*TODO это должно быть в роуте <EndGameScreen/>*/}
    </div>
  )
}

export default App
