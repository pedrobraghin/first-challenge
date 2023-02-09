import { Event } from './../../entities/Event';
import { IEventRepository } from './../IEventRepository';

export class InMemoryEventsRepository implements IEventRepository {
  private events: Event[] = [];

  createEvent(event: Event): void {
    this.events.push(event);
  }

  getAllEvents(): Event[] {
    return this.events;
  }

  getEventById(id: string): Event | null {
    return this.events.find((event) => event._id === id) ?? null;
  }

  getEventsByWeekday(weekday: number): Event[] | null {
    const foundEvents = this.events.filter((event) => {
      const eventDate = new Date(event.dateTime).getDay();
      return eventDate === weekday;
    });

    return foundEvents;
  }

  deleteEventById(id: string): Event | null {
    const eventIndex = this.events.findIndex((event) => event._id === id);
    if (eventIndex === -1) {
      return null;
    }

    return this.events.splice(eventIndex, 1)[0];
  }

  deleteEventsByWeekday(weekday: number): Event[] | null {
    const deletedEvents: Event[] = [];
    const filteredEvents = this.events.filter((eventToRemove) => {
      const eventDate = new Date(eventToRemove.dateTime).getDay();
      if (eventDate === weekday) {
        deletedEvents.push(eventToRemove);
      }
      return eventDate != weekday;
    });
    this.events = filteredEvents;

    return deletedEvents;
  }
}
