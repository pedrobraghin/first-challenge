import { Router } from 'express';

const eventRouter = Router();

eventRouter.get('/');
eventRouter.get('/:weekday');
eventRouter.get('/:id');
eventRouter.delete(':weekday');
eventRouter.delete('/:id');

export { eventRouter };
