import { Router } from 'express';
import { createUserController, authUserController } from '../modules/user';

const usersRouter = Router();

usersRouter.post('/signin', (req, res) => {
  authUserController.handle(req, res);
});

usersRouter.post('/signup', (req, res) => {
  createUserController.handle(req, res);
});

export { usersRouter };
