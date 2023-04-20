import { Router } from 'express';
import { createTopic, deleteTopic, getAllTopics } from '../controllers/topics';

export const topicRoutes = (router: Router) => {
  const topicRouter: Router = Router();

  topicRouter.post('/', createTopic);
  topicRouter.get('/', getAllTopics);
  topicRouter.delete('/', deleteTopic);

  router.use('/topics', topicRouter);
};
