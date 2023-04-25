import { useEffect } from 'react';
import AppRouter from './components/router/AppRouter';
import { useRedirectWithAuth } from './hooks/useRedirectWithAuth';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ToggleTheme from './components/toggleTheme/toggleTheme';
import { Themes } from './consts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';

function App() {
  const theme_id = useSelector((state: RootState) => state.theme.idUserTheme);
  const theme = Themes[theme_id || 0];

  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      if (__SERVER_PORT__) {
        await fetch(url);
      }
    };

    fetchServerData();
  }, []);

  useRedirectWithAuth();

  return (
    <div className={`app ${theme}`}>
      <ToggleTheme />
      <AppRouter />
    </div>
  );
}

export default App;
