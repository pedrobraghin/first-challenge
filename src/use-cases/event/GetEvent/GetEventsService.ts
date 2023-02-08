import { IEventRepository } from '../../../repositories/IEventRepository';

export class GetEventsService {
  constructor(private eventRepository: IEventRepository) {}
}
