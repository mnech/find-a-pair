import { Router } from 'express';

import { userRoutes } from './userRoutes';
import { topicRoutes } from './topicRoutes';
import { commentsRoutes } from './commentsRoutes';

const ApiRouter = Router();

userRoutes(ApiRouter);
topicRoutes(ApiRouter);
commentsRoutes(ApiRouter);

export default ApiRouter;
