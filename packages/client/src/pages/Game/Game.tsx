import React, { useEffect, useRef } from 'react';
import './game.scss';
import { GameController } from './GameController';

function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;
    const ctx = canvas!.getContext('2d');
    new GameController(canvas, ctx);
  }, []);

  return <canvas ref={ref} width={500} height={500} />;
}

export default Game;
