import { IEventsRepository } from '../../../repositories/IEventsRepository';

export class GetEventsService {
  constructor(private eventRepository: IEventsRepository) {}

  getallEvents() {
    const allEvents = this.eventRepository.getAllEvents();
    return allEvents;
  }

  getEventById(id: string) {
    const event = this.eventRepository.getEventById(id);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  }

  getEventsByWeekday(weekday: number) {
    const events = this.eventRepository.getEventsByWeekday(weekday);
    return events;
  }
}
