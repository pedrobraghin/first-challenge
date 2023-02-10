import { InMemoryEventsRepository } from './../../repositories/implementations/InMemoryEventsRepository';
import { CreateEventController } from './CreateEvent/CreateEventController';
import { CreateEventService } from './CreateEvent/CreateEventService';

import { DeleteEventByIdController } from './DeleteEvent/DeleteEventByIdController';
import { DeleteEventsService } from './DeleteEvent/DeleteEventsService';
import { DeleteEventsByDayOfTheWeekController } from './DeleteEvent/DeleteEventsByDayOfTheWeekController';

import { GetAllEventsController } from './GetEvent/GetAllEventsController';
import { GetEventByIdController } from './GetEvent/GetEventByIdController';
import { GetEventsByDayOfTheWeekController } from './GetEvent/GetEventsByDayOfTheWeekController';
import { GetEventsService } from './GetEvent/GetEventsService';

const eventRepository = new InMemoryEventsRepository();
const createEventService = new CreateEventService(eventRepository);
const createEventController = new CreateEventController(createEventService);

const deleteEventService = new DeleteEventsService(eventRepository);
const deleteEventByIdController = new DeleteEventByIdController(
  deleteEventService
);
const deleteEventsByDayOfTheWeekController =
  new DeleteEventsByDayOfTheWeekController(deleteEventService);

const getEventService = new GetEventsService(eventRepository);
const getAllEventsController = new GetAllEventsController(getEventService);
const getEventsByDayOfTheWeekController = new GetEventsByDayOfTheWeekController(
  getEventService
);

const getEventByIdController = new GetEventByIdController(getEventService);

export {
  createEventController,
  deleteEventByIdController,
  deleteEventsByDayOfTheWeekController,
  getAllEventsController,
  getEventsByDayOfTheWeekController,
  getEventByIdController,
};
