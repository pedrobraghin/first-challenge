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

eventRouter.post('/', (req, res) => {
  createEventController.handle(req, res);
});

eventRouter.get('/', (req, res) => {
  getAllEventsController.handle(req, res);
});

eventRouter.get('/:weekday', (req, res) => {
  getEventsByWeekdayController.handle(req, res);
});

eventRouter.get('/:id', (req, res) => {
  getEventByIdController.handle(req, res);
});

eventRouter.delete(':weekday', (req, res) => {
  deleteEventsByWeekdayController.handle(req, res);
});

eventRouter.delete('/:id', (req, res) => {
  deleteEventByIdController.handle(req, res);
});

export { eventRouter };
