import { Request, Response } from 'express';
import { GetEventsService } from './GetEventsService';

export class GetEventsByWeekdayController {
  constructor(private getEventService: GetEventsService) {}

  handle(req: Request, res: Response) {
    const weekday = req.query.weekday as string;

    try {
      const events = this.getEventService.getEventsByWeekday(+weekday);

      return res.status(200).json({
        status: 'success',
        data: {
          events: events ?? 'No events found',
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
