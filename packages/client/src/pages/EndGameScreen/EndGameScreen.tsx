import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../models/App';
import './EndGameScreen.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Button } from 'react-bootstrap';
import AuthController from '../../controllers/AuthController';

export const EndGameScreen = () => {
  const handleClickLogout = async () => {
    await AuthController.logout();
  };
  const score = useSelector((state: RootState) => state.game.score);
  return (
    <div className="container-md mt-5 w-50 h-auto d-flex flex-column align-items-center end">
      <p className="endGameTitle">Конец игры</p>
      <p className="endGameScore">Счёт: {score}</p>
      <Link to={routes.game} className="start_link">
        Попробовать еще раз?
      </Link>
      <Link to={routes.leaderboard} className="link">
        Лидерборд
      </Link>
      <Link to={routes.profile} className="link">
        Профиль
      </Link>
      <Button className="btn btn-light" onClick={handleClickLogout}>
        Выйти
      </Button>
    </div>
  );
};
