import { IEventRepository } from './../IEventRepository';

export class InMemoryEventsRepository implements IEventRepository {
  getAllEvents(): Event[] {
    throw new Error('Method not implemented.');
  }
}
