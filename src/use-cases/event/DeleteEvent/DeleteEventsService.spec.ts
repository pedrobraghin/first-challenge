import { CreateEventService } from './../CreateEvent/CreateEventService';
import { DeleteEventsService } from './DeleteEventsService';
import { InMemoryEventsRepository } from './../../../repositories/implementations/InMemoryEventsRepository';
import { Event } from '../../../entities/Event';

describe('Delete one or more events', () => {
  let eventsRepository: InMemoryEventsRepository;
  let deleteEventsService: DeleteEventsService;
  let createEventService: CreateEventService;

  beforeAll(() => {
    eventsRepository = new InMemoryEventsRepository();
    deleteEventsService = new DeleteEventsService(eventsRepository);
    createEventService = new CreateEventService(eventsRepository);
  });

  it('Should be able to delete a single event by id', () => {
    const event = new Event('Hackathon', '2023-12-31');
    createEventService.execute(event);
    expect(deleteEventsService.deleteEventById(event._id)).toEqual(event);
  });

  it('Should not be able to delete a event that not exist', () => {
    const event = new Event('Hackathon', '2023-12-31');

    expect(() => {
      deleteEventsService.deleteEventById(event._id);
    }).toThrowError(new Error(`Event not found`));

    // any value between 0 and 6 can be used to delete
    expect(deleteEventsService.deleteEventsByWeekday(1)).toHaveLength(0);
  });
});
