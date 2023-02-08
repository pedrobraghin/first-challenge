import { Request, Response } from 'express';
import { DeleteEventsService } from './DeleteEventsService';

export class DeleteEventByIdController {
  constructor(private deleteEventService: DeleteEventsService) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      this.deleteEventService.deleteEventById(id);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).json({
          status: 'fail',
          message: err.message,
        });
      }
    }

    res.status(200).send();
  }
}
