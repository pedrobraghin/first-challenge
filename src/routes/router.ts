import { Router, Request, Response } from 'express';

const router = Router();

router.use('*', (req, res) => {
  return res.status(404).json({
    status: 'fail',
    message: 'Route not found',
  });
});

router.use((err: Error, req: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }

  return res.status(500).json({
    statys: 'erro',
    message: 'Internal server error. Please try again later',
  });
});

export { router };
