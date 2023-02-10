import { GetEventsService } from './GetEventsService';
import { CreateEventService } from '../CreateEvent/CreateEventService';
import { InMemoryEventsRepository } from '../../../repositories/implementations/InMemoryEventsRepository';
import { Event } from '../../../entities/Event';
import { v4 as uuidv4 } from 'uuid';

describe('Get one or more events', () => {
  let eventsRepository: InMemoryEventsRepository;
  let createEventsService: CreateEventService;
  let getEventsService: GetEventsService;

  beforeAll(() => {
    eventsRepository = new InMemoryEventsRepository();
    createEventsService = new CreateEventService(eventsRepository);
    getEventsService = new GetEventsService(eventsRepository);
  });

  it('Should be able to get event by id', () => {
    const event = new Event(
      'Tech conference',
      new Date('2023-06-05').toISOString()
    );

    createEventsService.execute(event);
    expect(getEventsService.getEventById(event._id)).toEqual(event);
  });

  it('Should be able to get all events', () => {
    const event1 = new Event(
      'Workshop AI - Event opening',
      new Date('2023-06-04').toISOString()
    );
    const event2 = new Event(
      'Fix production bug',
      new Date('2024-01-01').toISOString()
    );
    const event3 = new Event(
      'Do While - Rocketseat',
      new Date('2025-12-05').toISOString()
    );

    createEventsService.execute(event1);
    createEventsService.execute(event2);
    createEventsService.execute(event3);

    expect(getEventsService.getallEvents()).toEqual(
      expect.arrayContaining([event1, event2, event3])
    );
  });

  it('Should be able to get events by day of the week', () => {
    const event1 = new Event(
      'Workshop AI - Morning',
      new Date('2023-06-05').toISOString()
    );
    const event2 = new Event(
      'Workshop AI - Afternoon',
      new Date('2023-06-05').toISOString()
    );
    const event3 = new Event(
      'Workshop AI - Night',
      new Date('2023-06-05').toISOString()
    );

    const event4 = new Event(
      'Workshop AI - Closing Event',
      new Date('2023-06-06').toISOString()
    );

    createEventsService.execute(event1);
    createEventsService.execute(event2);
    createEventsService.execute(event3);
    createEventsService.execute(event4);

    const result = getEventsService.getEventsByDayOfTheWeek(
      new Date(event1.dateTime).getDay()
    );

    expect(result).toEqual(expect.arrayContaining([event1, event2, event3]));
    expect(result).not.toContain(event4);
  });

  it('Should not be able to get an event by id that not exists', () => {
    expect(() => {
      getEventsService.getEventById(uuidv4());
    }).toThrowError(new Error('Event not found'));
  });
});
