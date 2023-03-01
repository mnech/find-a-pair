import React, { useEffect, useRef } from 'react';
import './game.scss';
import { GameController } from './GameController';
import Player from '../../components/player/Player';

function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;
    const ctx = canvas!.getContext('2d');
    new GameController(canvas, ctx);
  }, []);

  return (
    <>
      <Player url="http://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3" />
      <canvas ref={ref} width={500} height={500} />
    </>
  );
}

export default Game;
