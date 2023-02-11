import { Request, Response } from 'express';
import { CreateEventService } from './CreateEventService';
import { Event } from '../../../entities/Event';
export class CreateEventController {
  constructor(private createEventService: CreateEventService) {}

  handle(req: Request, res: Response) {
    const { description, dateTime } = req.body;
    const event = new Event(description, dateTime);

    try {
      this.createEventService.execute(event);
      return res.status(201).send();
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error. Please try again later.',
      });
    }
  }
}
