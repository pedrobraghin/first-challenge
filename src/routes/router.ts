import { Router } from 'express';
import { usersRouter } from './users.routes';
import { eventRouter } from './events.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/events', eventRouter);

export { router };
