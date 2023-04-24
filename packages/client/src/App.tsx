import { useEffect } from 'react';
import AppRouter from './components/router/AppRouter';
import { useRedirectWithAuth } from './hooks/useRedirectWithAuth';
import { useSelector } from 'react-redux';
import { userDataSelector } from './selectors/profile';
import { RootState } from './store';
import ToggleTheme from './components/toggleTheme/toggleTheme';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import ThemeController from './controllers/ThemeController';
import { Themes } from './consts';

function App() {
  const userData = useSelector(userDataSelector);
  const user_id = userData.id;
  const theme_id = useSelector((state: RootState) => state.theme.idUserTheme);
  const theme = Themes[theme_id];

  const getUserTheme = async (user_id: number) => {
    await ThemeController.getUserTheme(user_id);
  };

  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      if (__SERVER_PORT__) {
        await fetch(url);
      }
    };

    fetchServerData();
  }, []);

  useEffect(() => {
    getUserTheme(user_id);
  }, [user_id]);

  useRedirectWithAuth();

  return (
    <div className={theme}>
      <ToggleTheme />
      <AppRouter />
    </div>
  );
}

export default App;
