import { IEventsRepository } from '../../../repositories/IEventsRepository';

export class DeleteEventsService {
  constructor(private eventsRepository: IEventsRepository) {}

  deleteEventById(eventId: string) {
    const event = this.eventsRepository.deleteEventById(eventId);
    if (!event) {
      throw new Error(`Event not found`);
    }
    return event;
  }

  deleteEventsByDayOfTheWeek(dayOfTheWeek: number) {
    const deletedEvents =
      this.eventsRepository.deleteEventsByDayOfTheWeek(dayOfTheWeek);
    return deletedEvents;
  }
}
