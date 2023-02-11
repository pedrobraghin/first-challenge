import { getDayOfTheWeek } from '../../../utils/getDayOfTheWeek';
import { Request, Response } from 'express';
import { DeleteEventsService } from './DeleteEventsService';

export class DeleteEventsByDayOfTheWeekController {
  constructor(private deleteEventService: DeleteEventsService) {}

  handle(req: Request, res: Response) {
    const dayOfTheWeek = req.query.dayOfTheWeek as string;
    try {
      const day = getDayOfTheWeek(dayOfTheWeek);
      const deletedEvents =
        this.deleteEventService.deleteEventsByDayOfTheWeek(day);

      return res.status(200).json({
        status: 'success',
        data: {
          deletedEvents: deletedEvents,
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
        status: 'fail',
        message: 'Internal Server Error. Please try again later',
      });
    }
  }
}
