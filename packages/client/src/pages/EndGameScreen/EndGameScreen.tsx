//TODO Заглушка заменить когда подъедет статистика игры
import { Button } from 'react-bootstrap'
import React from 'react'

const rate = 40;

export const EndGameScreen = () => {

    const handleClickGoToLeaderboard = () => {
      //TODO переход на лидерборд
    }
    const handleClickGoToGame = () => {
      //TODO переход на игру
    }
    const handleClickGoToMenu = () => {
      //TODO переход на игру
    }

    return (
      <div className="container-md mt-5 w-50 h-auto d-flex flex-column align-items-center">
          <p className="endGameTitle">Конец игры</p>
          <p className="endGameScore">Счёт: {rate}</p>
          <Button onClick={handleClickGoToGame}>
              Попробовать еще раз?
          </Button>
          <Button variant="link" onClick={handleClickGoToLeaderboard}>
              Лидерборд
          </Button>
          <Button variant="link" onClick={handleClickGoToMenu}>
              Главное меню
          </Button>
      </div>
    )
}
