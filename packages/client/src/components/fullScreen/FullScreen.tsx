import Button from 'react-bootstrap/Button';
import useToggle from '../../hooks/useToggle';
import './fullScreen.scss';
import { useEffect } from 'react';

const FullScreen = () => {
  const [fullScreen, toggle] = useToggle(false);

  useEffect(() => {
    if (!document.fullscreenElement) return;
    if (fullScreen) {
      document.documentElement.requestFullscreen();
    } else if (document.fullscreenElement !== null) {
      document.exitFullscreen();
    }
  }, [fullScreen]);

  return (
    <div className="full-screen">
      <Button onClick={toggle}>
        {fullScreen ? 'Exit full screen' : 'Full screen'}
      </Button>
    </div>
  );
};

export default FullScreen;
