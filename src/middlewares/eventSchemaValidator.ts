import { Request, Response, NextFunction } from 'express';
import { eventSchema } from '../schemas/eventSchema';

export async function eventSchemaValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { description, dateTime, createdAt } = req.body;

    await eventSchema.validateAsync({ description, dateTime, createdAt });

    return next();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        status: 'Bad Request',
        message: err.message,
      });
    }
  }
}
