import { Router } from 'express';

import { userRoutes } from './userRoutes';

const ApiRouter = Router();

userRoutes(ApiRouter);

export default ApiRouter;
