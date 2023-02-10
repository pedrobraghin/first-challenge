import { IEventsRepository } from './../../../repositories/IEventsRepository';
import { Event } from './../../../entities/Event';
export class CreateEventService {
  constructor(private eventsRepository: IEventsRepository) {}

  execute(event: Event) {
    const eventDate = new Date(event.dateTime);
    const currentDate = new Date();

    if (eventDate < currentDate) {
      throw new Error(
        'Event date must be greater than or equal to the current date'
      );
    }
    this.eventsRepository.createEvent(event);
  }
}
