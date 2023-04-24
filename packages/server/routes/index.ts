import { Router } from 'express';

import { userRoutes } from './userRoutes';
import { topicRoutes } from './topicRoutes';
import { commentsRoutes } from './commentsRoutes';
import { themeRoutes } from './themeRoutes';

const ApiRouter = Router();

userRoutes(ApiRouter);
topicRoutes(ApiRouter);
commentsRoutes(ApiRouter);
themeRoutes(ApiRouter);

export default ApiRouter;
