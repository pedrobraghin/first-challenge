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

  getEventsByDayOfTheWeek(dayOfTheWeek: number) {
    const events = this.eventRepository.getEventsByDayOfTheWeek(dayOfTheWeek);
    return events;
  }
}
