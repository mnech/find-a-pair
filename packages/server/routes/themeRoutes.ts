import { Router } from 'express';
import {
  createTheme,
  deleteTheme,
  getUserTheme,
  updateUserTheme,
  getAllThemes,
} from '../controllers/themes';

export const themeRoutes = (router: Router) => {
  const themeRouter: Router = Router();

  themeRouter.post('/', createTheme);
  themeRouter.delete('/', deleteTheme);
  themeRouter.get('/', getAllThemes);
  themeRouter.get('/user_theme', getUserTheme);
  themeRouter.put('/user_theme', updateUserTheme);

  router.use('/theme', themeRouter);
};
