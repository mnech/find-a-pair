import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import './player.scss';

type TPlayer = {
  url: string;
};

const useAudio = (url: string): [boolean, () => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = (props: TPlayer) => {
  const { url } = props;
  const [playing, toggle] = useAudio(url);

  return (
    <div className="player">
      <Button onClick={toggle}>{playing ? 'Pause' : 'Play'}</Button>
    </div>
  );
};

export default Player;
