import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { routes } from '../../models/App';
import AuthController from '../../controllers/AuthController';
import './StartGameScreen.scss';

export const StartGameScreen = () => {
  const logout = async () => {
    await AuthController.logout();
  };

  return (
    <div className="start">
      <div className="start__container">
        <p className="start__title">
          Кликай по карточкам, запоминай, что под ними изображено, и находи пары
          одинаковых картинок
        </p>
        <Link to={routes.game} className="start__game">
          Старт
        </Link>
        <Link to={routes.leaderboard} className="start__link">
          Лидерборд
        </Link>
        <Link to={routes.profile} className="start__link">
          Профиль
        </Link>
        <Button variant="outline-primary" onClick={logout}>
          Выйти
        </Button>
      </div>
    </div>
  );
};
