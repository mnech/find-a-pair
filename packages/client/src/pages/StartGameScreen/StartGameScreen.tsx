import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "./StartGameScreen.scss";

export const StartGameScreen = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  }

  return (
    <div className="start">
      <div className="start__container">
        <p className="start__title">Кликай по карточкам, запоминай, что под ними изображено, и находи пары одинаковых картинок</p>
          <Button onClick={startGame}>
            Старт
          </Button>
        </div>
    </div>
  )
}
