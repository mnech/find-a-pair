import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Themes } from '../../consts';

import sunIcon from '../../../public/sun.svg';
import moonIcon from '../../../public/moon.svg';
import { userDataSelector } from '../../selectors/profile';
import ThemeController from '../../controllers/ThemeController';

import './toggleTheme.scss';

const ToggleTheme = () => {
  const userData = useSelector(userDataSelector);
  const user_id = userData.id;

  const toggleTheme = async (theme_id: number) => {
    await ThemeController.updateUserTheme({ user_id, theme_id });
  };

  return (
    <div className="theme">
      <Button
        className="btn theme"
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => toggleTheme(Themes.dark)}
      >
        Dark
        <img src={moonIcon} alt="moon" className="img" />
      </Button>
      <Button
        className="btn"
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => toggleTheme(Themes.light)}
      >
        Light
        <img src={sunIcon} alt="sun" className="img" />
      </Button>
    </div>
  );
};

export default ToggleTheme;
