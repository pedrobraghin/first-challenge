import { Router } from 'express';
import { createUserController, authUserController } from '../modules/user';

const usersRouter = Router();

usersRouter.post('/signin', createUserController.handle);
usersRouter.post('/signup', authUserController.handle);

export { usersRouter };
