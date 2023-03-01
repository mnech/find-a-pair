import Button from 'react-bootstrap/Button';
import useAudio from '../../hooks/useAudio';

import './player.scss';

type TPlayer = {
  url: string;
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
