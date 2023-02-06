import { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../../pages/page404/Page404"));
const Profile = lazy(() => import("../../pages/Profile/Profile"));
const Game = lazy(() => import("../../pages/game/Game"));

//пути к папкам нужно поменять, когда будут готовы страницы
const Signin = lazy(() => import("../../pages/Profile/Profile"));
const Signup = lazy(() => import("../../pages/Profile/Profile"));
const Leaderboard = lazy(() => import("../../pages/Profile/Profile"));
const Forum = lazy(() => import("../../pages/Profile/Profile"));

function AppRouter() {
  return (
    <Suspense fallback={<Spinner/>}>
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
    </Suspense>
  );
}

export default AppRouter;
