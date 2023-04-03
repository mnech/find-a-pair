import { ErrorBoundary } from './ErrorBoundary';
import { Auth } from '../pages/Auth/Auth';
import { Leaderboard } from '../pages/Leaderboard/Leaderboard';
import Game from '../pages/Game/Game';
import Forum from '../pages/Forum/Forum';
import Profile from '../pages/Profile/Profile';
import { StartGameScreen } from '../pages/StartGameScreen/StartGameScreen';
import Signup from '../pages/SignUp/SignUp';
import { routes } from '../models/App';
import { EndGameScreen } from '../pages/EndGameScreen/EndGameScreen';
export const staticRoutes = [
  {
    path: routes.auth,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        path: routes.auth,
        element: <Auth />,
      },
      {
        path: routes.profile,
        element: <Profile />,
      },
      {
        path: routes.signUp,
        element: <Signup />,
      },
      {
        path: routes.leaderboard,
        element: <Leaderboard />,
      },
      {
        path: routes.forum,
        element: <Forum />,
      },
      {
        path: routes.game,
        element: <Game />,
      },
      {
        path: routes.startGame,
        element: <StartGameScreen />,
      },
      {
        path: routes.endGame,
        element: <EndGameScreen />,
      },
    ],
  },
];
