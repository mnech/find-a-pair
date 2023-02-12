import { Link } from 'react-router-dom';

import "./StartGameScreen.scss";

export const StartGameScreen = () => {
  return (
    <div className="start">
      <div className="start__container">
        <p className="start__title">Кликай по карточкам, запоминай, что под ними изображено, и находи пары одинаковых картинок</p>
          <Link to="/game" className='start__link'>
            Старт
          </Link>
        </div>
    </div>
  )
}
