import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../models/App';
import './EndGameScreen.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const EndGameScreen = () => {
  const score = useSelector((state: RootState) => state.game.score);
  return (
    <div className="container-md mt-5 w-50 h-auto d-flex flex-column align-items-center">
      <p className="endGameTitle">Конец игры</p>
      <p className="endGameScore">Счёт: {score}</p>
      <Link to={routes.game} className="btn btn-primary">
        Попробовать еще раз?
      </Link>
      <Link to={routes.leaderboard}>Лидерборд</Link>
      <Link to={routes.profile}>Профиль</Link>
    </div>
  );
};
