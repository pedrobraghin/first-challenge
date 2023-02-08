import { IEventRepository } from '../../../repositories/IEventRepository';

export class DeleteEventsService {
  constructor(private eventsRepository: IEventRepository) {}
}
