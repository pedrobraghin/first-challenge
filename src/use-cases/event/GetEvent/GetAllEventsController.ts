import { Request, Response } from 'express';
import { GetEventsService } from './GetEventsService';

export class GetAllEventsController {
  constructor(private getEventService: GetEventsService) {}

  handle(_: Request, res: Response) {
    try {
      const allEvents = this.getEventService.getallEvents();

      if (!allEvents) {
        return res.status(404).json({
          status: 'fail',
          message: 'No events found',
        });
      }

      return res.status(200).json({
        status: 'success',
        data: {
          events: allEvents,
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error. Please try again later.',
      });
    }
  }
}
