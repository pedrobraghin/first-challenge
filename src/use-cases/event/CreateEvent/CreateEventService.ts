import { InMemoryEventsRepository } from './../../../repositories/implementations/InMemoryEventsRepository';
export class CreateEventService {
  constructor(private eventsRepository: InMemoryEventsRepository) {}
}
