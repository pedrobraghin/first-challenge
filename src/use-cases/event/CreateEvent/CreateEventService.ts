import { IEventsRepository } from './../../../repositories/IEventsRepository';
import { Event } from './../../../entities/Event';
export class CreateEventService {
  constructor(private eventsRepository: IEventsRepository) {}

  execute(event: Event) {
    this.eventsRepository.createEvent(event);
  }
}
