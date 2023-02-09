import { Router } from 'express';
import { createUserController, authUserController } from '../use-cases/user';
import { userSchemaValidator } from '../middlewares/userSchemaValidator';

const usersRouter = Router();

usersRouter.post('/signin', (req, res) => {
  authUserController.handle(req, res);
});

usersRouter.post('/signup', userSchemaValidator, (req, res) => {
  createUserController.handle(req, res);
});

export { usersRouter };
