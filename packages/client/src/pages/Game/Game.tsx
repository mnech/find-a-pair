import React, { useEffect, useRef } from 'react';
import './game.scss';
import { GameController } from './GameController';
import Player from '../../components/player/Player';
import { MUSIC_URL } from '../../consts';

function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  let game: GameController;

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      game = new GameController(canvas, ctx);
    }
    return () => {
      game.ablation();
    };
  }, []);

  return (
    <>
      <Player url={MUSIC_URL} />
      <canvas ref={ref} width={500} height={500} />
    </>
  );
}

export default Game;
