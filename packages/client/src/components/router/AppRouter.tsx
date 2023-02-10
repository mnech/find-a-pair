import { Routes, Route } from "react-router-dom";

import Page404 from "../../pages/Page404/Page404";
import { Auth } from "../../pages/Auth/Auth";
import { Leaderboard } from "../../pages/Leaderboard/Leaderboard";
import Game from "../../pages/Game/Game";
import Forum from "../../pages/Forum/Forum";
import Profile from "../../pages/Profile/Profile";

//пути к папкам нужно поменять, когда будут готовы страницы
import Signup from "../../pages/Profile/Profile";

function AppRouter() {
  return (
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
                <Auth />
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
  );
}

export default AppRouter;
