import React, { useEffect, useRef } from 'react';
import './game.scss';
import { GameController } from './GameController';
import Player from '../../components/player/Player';
import { MUSIC_URL } from '../../consts';
import { setScore } from '../.././reducers/game';
import { useDispatch, useSelector } from 'react-redux';

function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  let game: GameController;

  const totalScore = useSelector((state: any) => state.game.score);
  const dispatch = useDispatch();
  const setTotalScore = (totalScore: number) => {
    dispatch(setScore({ score: totalScore }));
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      game = new GameController(canvas, ctx, totalScore, setTotalScore);
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
