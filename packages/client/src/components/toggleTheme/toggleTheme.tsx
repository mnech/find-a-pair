import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Themes } from '../../consts';

import sunIcon from '../../../public/sun.svg';
import moonIcon from '../../../public/moon.svg';
import { userDataSelector } from '../../selectors/profile';
import ThemeController from '../../controllers/ThemeController';

const ToggleTheme = () => {
  const userData = useSelector(userDataSelector);
  const user_id = userData.id;

  const toggleTheme = async (theme_id: number) => {
    await ThemeController.updateUserTheme({ user_id, theme_id });
  };

  return (
    <div className="theme">
      <Button onClick={() => toggleTheme(Themes.dark)}>
        Dark
        <img src={moonIcon} alt="moon" />
      </Button>
      <Button onClick={() => toggleTheme(Themes.light)}>
        Light
        <img src={sunIcon} alt="sun" />
      </Button>
    </div>
  );
};

export default ToggleTheme;
