import { Request, Response } from 'express';
import { AuthUserService } from './AuthUserService';

export class AuthUserController {
  constructor(private authService: AuthUserService) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const authorized = await this.authService.execute(email, password);
    if (!authorized) {
      return res.status(401).send({
        status: 'fail',
        message: 'Invalid email or password',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Authentication successful',
    });
  }
}
