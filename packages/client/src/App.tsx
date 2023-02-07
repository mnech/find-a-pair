import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Page404 from "./pages/Page404/Page404";
import Profile from "./pages/Profile/Profile";
import Game from "./pages/Game/Game";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Forum from "./pages/Forum/Forum";

//пути к папкам нужно поменять, когда будут готовы страницы
import Signin from "./pages/Profile/Profile";
import Signup from "./pages/Profile/Profile";

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
      <Routes>
        <Route path="/">
          <Route 
            index
            element={
                <Profile />
            }
          />

          <Route 
            path="sigin"
            element={
                <Signin />
            }
          />

          <Route 
            path="signup"
            element={
                <Signup />
            }
          />

          <Route 
            path="leaderboard"
            element={
                <Leaderboard />
            }
          />

          <Route 
            path="forum"
            element={
                <Forum />
            }
          />

          <Route 
            path="game"
            element={
                <Game />
            }
          />    
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
  
}

export default App
