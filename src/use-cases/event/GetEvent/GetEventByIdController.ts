import { Request, Response } from 'express';
import { GetEventsService } from './GetEventsService';

export class GetEventByIdController {
  constructor(private getEventService: GetEventsService) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const event = this.getEventService.getEventById(id);

      res.status(200).json({
        status: 'success',
        data: {
          event: event,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({
          status: 'fail',
          message: err.message,
        });
      }

      return res.status(404).json({
        status: 'error',
        message: 'Internal Server Error. Please try again later',
      });
    }
  }
}
