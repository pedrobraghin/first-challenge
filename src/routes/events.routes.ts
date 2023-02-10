import { Router } from 'express';
import { eventSchemaValidator } from '../middlewares/eventSchemaValidator';
import {
  createEventController,
  getAllEventsController,
  getEventsByDayOfTheWeekController,
  getEventByIdController,
  deleteEventByIdController,
  deleteEventsByDayOfTheWeekController,
} from '../use-cases/event/index';

const eventRouter = Router();

eventRouter.get('/:id', (req, res) => {
  return getEventByIdController.handle(req, res);
});

eventRouter.get('/', (req, res) => {
  const { dayOfTheWeek } = req.query;

  if (dayOfTheWeek) {
    return getEventsByDayOfTheWeekController.handle(req, res);
  }
  return getAllEventsController.handle(req, res);
});

eventRouter.post('/', eventSchemaValidator, (req, res) => {
  return createEventController.handle(req, res);
});

eventRouter.delete('/', (req, res) => {
  const { dayOfTheWeek } = req.query;
  if (dayOfTheWeek) {
    return deleteEventsByDayOfTheWeekController.handle(req, res);
  }
  return res.status(404).send();
});

eventRouter.delete('/:id', (req, res) => {
  return deleteEventByIdController.handle(req, res);
});

export { eventRouter };
