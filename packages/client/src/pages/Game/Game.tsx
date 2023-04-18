import React, { useEffect, useRef } from 'react';
import './game.scss';
import { GameController } from './GameController';
import Player from '../../components/player/Player';
import { MUSIC_URL } from '../../consts';
import { setScore } from '../.././reducers/game';
import { useDispatch, useSelector } from 'react-redux';
import FullScreen from '../../components/fullScreen/FullScreen';
import LeaderboardController from '../../controllers/LeaderboardController';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { ratingFieldName, teamName } from '../../models/Leaderboard';
import { routes } from '../../models/App';

export const ATTEMPTS_COUNT = 5;

function Game() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const totalScore = useSelector((state: any) => state.game.score);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.profile.data);
  let game: GameController;
  const setTotalScore = (totalScore: number) => {
    dispatch(setScore({ score: totalScore }));
  };

  const closeGame = async () => {
    const res = await LeaderboardController.addUserToLeaderboard({
      data: {
        user_id: user.id,
        first_name: user.first_name,
        [ratingFieldName]: totalScore,
      },
      ratingFieldName,
      teamName: teamName,
    });

    if (res) {
      navigate(routes.endGame);
    }
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      game = new GameController(
        canvas,
        ctx,
        totalScore,
        setTotalScore,
        closeGame,
      );
    }
    return () => {
      game.ablation();
    };
  }, []);

  return (
    <>
      <Player url={MUSIC_URL} />
      <FullScreen />
      <canvas ref={ref} width={500} height={500} />
    </>
  );
}

export default Game;
