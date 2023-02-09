import { Router } from 'express';
import {
  createEventController,
  getAllEventsController,
  getEventsByWeekdayController,
  getEventByIdController,
  deleteEventByIdController,
  deleteEventsByWeekdayController,
} from '../use-cases/event/index';

const eventRouter = Router();

eventRouter.get('/:id', (req, res) => {
  getEventByIdController.handle(req, res);
});

eventRouter.get('/', (req, res) => {
  const { weekday } = req.query;
  if (weekday) {
    return getEventsByWeekdayController.handle(req, res);
  }
  getAllEventsController.handle(req, res);
});

eventRouter.post('/', (req, res) => {
  createEventController.handle(req, res);
});

eventRouter.delete('/', (req, res) => {
  const { weekday } = req.query;
  if (weekday) {
    return deleteEventsByWeekdayController.handle(req, res);
  }
});

eventRouter.delete('/:id', (req, res) => {
  deleteEventByIdController.handle(req, res);
});

export { eventRouter };
