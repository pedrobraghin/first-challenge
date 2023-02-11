import express, { Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import { router } from './routes/router';

const app = express();
const BASE_ROUTE = '/api/v1';

const corsOption: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE'],
};

app.use(helmet());
app.use(cors(corsOption));
app.use(express.json());

app.use(BASE_ROUTE, router);
app.use(
  `${BASE_ROUTE}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);
app.use('*', (_, res) => {
  return res.status(404).json({
    status: 'fail',
    message: 'Route not found',
  });
});

app.use((err: Error, _: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error. Please try again later',
  });
});

export { app };
