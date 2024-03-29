import { useState, useEffect, useRef } from 'react';

const useAudio = (url: string): [boolean, () => void] => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  if (audioRef.current === null && typeof Audio !== 'undefined') {
    audioRef.current = new Audio(url);
  }

  const toggle = () => setPlaying((playing) => !playing);
  const stopPlaying = () => setPlaying(false);

  useEffect(() => {
    playing ? audioRef.current?.play() : audioRef.current?.pause();
  }, [playing]);

  useEffect(() => {
    audioRef.current?.addEventListener('ended', stopPlaying);
    return () => {
      audioRef.current?.removeEventListener('ended', stopPlaying);
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;
