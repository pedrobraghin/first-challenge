import { Event } from '../entities/Event';

export interface IEventsRepository {
  createEvent(event: Event): void;
  getAllEvents(): Event[];
  getEventById(id: string): Event | null;
  getEventsByWeekday(weekday: number): Event[] | null;
  deleteEventById(id: string): Event | null;
  deleteEventsByWeekday(weekday: number): Event[] | null;
}
