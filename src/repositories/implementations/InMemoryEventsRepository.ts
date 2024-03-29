import { Event } from './../../entities/Event';
import { IEventsRepository } from '../IEventsRepository';

export class InMemoryEventsRepository implements IEventsRepository {
  private events: Event[] = [];

  createEvent(event: Event): void {
    this.events.push(event);
  }

  getAllEvents(): Event[] | null {
    return this.events.length > 0 ? this.events : null;
  }

  getEventById(id: string): Event | null {
    return this.events.find((event) => event._id === id) ?? null;
  }

  getEventsByDayOfTheWeek(dayOfTheWeek: number): Event[] | null {
    const foundEvents = this.events.filter((event) => {
      const eventDate = new Date(event.dateTime).getDay();
      return eventDate === dayOfTheWeek;
    });

    if (foundEvents.length === 0) {
      return null;
    }

    return foundEvents.length > 0 ? foundEvents : null;
  }

  deleteEventById(id: string): Event | null {
    const eventIndex = this.events.findIndex((event) => event._id === id);
    if (eventIndex === -1) {
      return null;
    }

    return this.events.splice(eventIndex, 1)[0];
  }

  deleteEventsByDayOfTheWeek(dayOfTheWeek: number): Event[] | null {
    const deletedEvents: Event[] = [];
    const filteredEvents = this.events.filter((eventToRemove) => {
      const eventDate = new Date(eventToRemove.dateTime).getDay();
      if (eventDate === dayOfTheWeek) {
        deletedEvents.push(eventToRemove);
      }
      return eventDate != dayOfTheWeek;
    });
    this.events = filteredEvents;

    return deletedEvents.length > 0 ? deletedEvents : null;
  }
}
