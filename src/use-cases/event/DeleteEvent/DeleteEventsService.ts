import { IEventRepository } from '../../../repositories/IEventRepository';

export class DeleteEventsService {
  constructor(private eventsRepository: IEventRepository) {}

  deleteEventById(eventId: string) {
    const event = this.eventsRepository.deleteEventById(eventId);
    if (!event) {
      throw new Error(`Event not found: ${eventId}`);
    }
  }

  deleteEventsByWeekday(weekday: number) {
    const deletedEvents = this.eventsRepository.deleteEventsByWeekday(weekday);
    return deletedEvents;
  }
}
