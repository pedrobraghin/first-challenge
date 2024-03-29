import { getDayOfTheWeek } from '../../../utils/getDayOfTheWeek';
import { Request, Response } from 'express';
import { GetEventsService } from './GetEventsService';

export class GetEventsByDayOfTheWeekController {
  constructor(private getEventService: GetEventsService) {}

  handle(req: Request, res: Response) {
    const dayOfTheWeek = req.query.dayOfTheWeek as string;

    try {
      const day = getDayOfTheWeek(dayOfTheWeek);
      const events = this.getEventService.getEventsByDayOfTheWeek(day);

      if (!events) {
        return res.status(404).json({
          status: `fail`,
          message: 'No events found',
        });
      }

      return res.status(200).json({
        status: 'success',
        data: {
          events: events,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          status: 'fail',
          message: err.message,
        });
      }

      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error. Please try again later.',
      });
    }
  }
}
