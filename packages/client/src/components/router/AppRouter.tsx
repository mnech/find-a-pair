import { Routes, Route } from "react-router-dom";

import Page404 from "../../pages/Page404/Page404";

import Game from "../../pages/Game/Game";

import Forum from "../../pages/Forum/Forum";

//пути к папкам нужно поменять, когда будут готовы страницы
import Signin from "../../pages/Profile/Profile";
import Signup from "../../pages/Profile/Profile";
import Leaderboard from "../../pages/Page404/Page404";
import Profile from "../../pages/Page404/Page404";

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
  );
}

export default AppRouter;
