import { Request, Response } from 'express';
import { DeleteEventsService } from './DeleteEventsService';

export class DeleteEventsByWeekdayController {
  constructor(private deleteEventService: DeleteEventsService) {}

  handle(req: Request, res: Response) {
    const { weekday } = req.params;
    try {
      const deletedEvents = this.deleteEventService.deleteEventsByWeekday(
        +weekday
      );

      if (deletedEvents?.length === 0) {
        return res.status(200).json({
          status: 'succes',
          message: 'No events found',
        });
      }

      return res.status(200).json({
        status: 'success',
        data: {
          deletedEvents: deletedEvents,
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: 'fail',
        message: 'Internal Server Error. Please try again later',
      });
    }
  }
}
