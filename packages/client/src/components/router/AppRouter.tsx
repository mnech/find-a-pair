import { Routes, Route } from 'react-router-dom';

import Page404 from '../../pages/Page404/Page404';
import { Auth } from '../../pages/Auth/Auth';
import { Leaderboard } from '../../pages/Leaderboard/Leaderboard';
import Game from '../../pages/Game/Game';
import Forum from '../../pages/Forum/Forum';
import Profile from '../../pages/Profile/Profile';
import { StartGameScreen } from '../../pages/StartGameScreen/StartGameScreen';
import Signup from '../../pages/SignUp/SignUp';
import { routes } from '../../models/App';
import { EndGameScreen } from '../../pages/EndGameScreen/EndGameScreen';

function AppRouter() {
  return (
    <Routes>
      <Route path={routes.profile}>
        <Route index element={<Profile />} />

        <Route path={routes.auth} element={<Auth />} />

        <Route path={routes.signUp} element={<Signup />} />

        <Route path={routes.leaderboard} element={<Leaderboard />} />

        <Route path={routes.forum} element={<Forum />} />

        <Route path={routes.game} element={<Game />} />

        <Route path={routes.startGame} element={<StartGameScreen />} />

        <Route path={routes.endGame} element={<EndGameScreen />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRouter;
