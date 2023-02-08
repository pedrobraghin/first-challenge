import express from 'express';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';

const app = express();
const corsOption: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE'],
};

app.use(helmet());
app.use(cors(corsOption));
app.use(express.json());

export { app };
