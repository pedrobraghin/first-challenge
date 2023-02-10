import { Event } from '../entities/Event';

export interface IEventsRepository {
  createEvent(event: Event): void;
  getAllEvents(): Event[] | null;
  getEventById(id: string): Event | null;
  getEventsByDayOfTheWeek(dayOfTheWeek: number): Event[] | null;
  deleteEventById(id: string): Event | null;
  deleteEventsByDayOfTheWeek(dayOfTheWeek: number): Event[] | null;
}
