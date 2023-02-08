import { Event } from './../../../entities/Event';
import { InMemoryEventsRepository } from './../../../repositories/implementations/InMemoryEventsRepository';
export class CreateEventService {
  constructor(private eventsRepository: InMemoryEventsRepository) {}

  execute(event: Event) {
    this.eventsRepository.createEvent(event);
  }
}
