import { Router } from 'express';

import { userRoutes } from './userRoutes';
import { topicRoutes } from './topicRoutes';

const ApiRouter = Router();

userRoutes(ApiRouter);
topicRoutes(ApiRouter);

export default ApiRouter;
