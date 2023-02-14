import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../models/App'
import './EndGameScreen.scss'
//TODO Заглушка заменить когда подъедет статистика игры
const rate = 40;

export const EndGameScreen = () => {

  return (
    <div className="container-md mt-5 w-50 h-auto d-flex flex-column align-items-center">
      <p className="endGameTitle">Конец игры</p>
      <p className="endGameScore">Счёт: {rate}</p>
      <Link to={routes.game} className="btn btn-primary">
        Попробовать еще раз?
      </Link>
      <Link to={routes.leaderboard}>
        Лидерборд
      </Link>
      <Link to={routes.profile}>
        Профиль
      </Link>
    </div>
  )
}
