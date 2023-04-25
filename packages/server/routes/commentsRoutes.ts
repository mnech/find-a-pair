import { Router } from 'express';
import {
  createComment,
  deleteComment,
  getAllComments,
} from '../controllers/comments';

export const commentsRoutes = (router: Router) => {
  const commentsRouter: Router = Router();

  commentsRouter.post('/', createComment);
  commentsRouter.get('/', getAllComments);
  commentsRouter.delete('/', deleteComment);

  router.use('/comments', commentsRouter);
};
