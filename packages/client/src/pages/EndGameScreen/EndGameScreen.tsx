import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../models/App';
import './EndGameScreen.scss';
import { Button } from 'react-bootstrap';
import AuthController from '../../controllers/AuthController';
//TODO Заглушка заменить когда подъедет статистика игры
const rate = 40;

export const EndGameScreen = () => {
  const handleClickLogout = async () => {
    await AuthController.logout();
  };
  return (
    <div className="container-md mt-5 w-50 h-auto d-flex flex-column align-items-center">
      <p className="endGameTitle">Конец игры</p>
      <p className="endGameScore">Счёт: {rate}</p>
      <Link to={routes.game} className="btn btn-primary">
        Попробовать еще раз?
      </Link>
      <Link to={routes.leaderboard} className="link-primary">
        Лидерборд
      </Link>
      <Link to={routes.profile} className="link-primary">
        Профиль
      </Link>
      <Button className="btn-link bg-white" onClick={handleClickLogout}>
        Выйти
      </Button>
    </div>
  );
};
