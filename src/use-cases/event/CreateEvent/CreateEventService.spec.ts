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
});
