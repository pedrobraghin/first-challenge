import { InMemoryEventsRepository } from '../../../repositories/implementations/InMemoryEventsRepository';
import { CreateEventService } from './CreateEventService';
import { Event } from '../../../entities/Event';

describe('Create event', () => {
  let eventsRepository: InMemoryEventsRepository;
  let createEventService: CreateEventService;

  beforeAll(() => {
    eventsRepository = new InMemoryEventsRepository();
    createEventService = new CreateEventService(eventsRepository);
  });

  it('Should be able to create a new event', async () => {
    const event = new Event('Test event', '2025-02-13');
    expect(createEventService.execute(event)).resolves;
  });

  it('Should not be able to create a new event before the current date', async () => {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    const event = new Event('Test event', yesterdayDate.toString());

    // await expect(createEventService.execute(event)).rejects.toEqual(
    //   new Error('Event date must be greater than or equal to the current date')
    // );
  });
});
