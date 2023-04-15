import { Router } from 'express';
import { addUser, checkUserExist } from '../controllers/user';

export const userRoutes = (router: Router) => {
  const userRouter: Router = Router();

  userRouter.post('/', addUser).get('/:id', checkUserExist);

  router.use('/user', userRouter);
};
