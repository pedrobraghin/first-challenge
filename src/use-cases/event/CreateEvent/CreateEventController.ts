import { Request, Response } from 'express';
import { CreateEventService } from './CreateEventService';
import { Event } from '../../../entities/Event';
export class CreateEventController {
  constructor(private createEventService: CreateEventService) {}

  handle(req: Request, res: Response) {
    const { description, dateTime, createdAt } = req.body;
    const event = new Event(description, dateTime, createdAt);

    try {
      this.createEventService.execute(event);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          status: 'fail',
          message: err.message,
        });
      }
    }

    return res.status(201).send();
  }
}
