import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { routes } from '../../models/App';
import AuthController from '../../controllers/AuthController';
import './StartGameScreen.scss';

export const StartGameScreen = () => {
  const logout = async () => {
    await AuthController.logout();
  };

  return (
    <div className="start">
      <div className="start__container shadow-sm p-5 rounded">
        <p className="start__title">
          Кликай по карточкам, запоминай, что под ними изображено, и находи пары
          одинаковых картинок
        </p>
        <Link to={routes.game} className="start__link start__link_game">
          Старт
        </Link>
        <Link to={routes.leaderboard} className="start__link">
          Лидерборд
        </Link>
        <Link to={routes.profile} className="start__link">
          Профиль
        </Link>
        <Button
          className="btn"
          style={{ border: 'none', backgroundColor: 'transparent' }}
          onClick={logout}
        >
          Выйти
        </Button>
      </div>
    </div>
  );
};
