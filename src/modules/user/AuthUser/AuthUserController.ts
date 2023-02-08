import { Request, Response } from 'express';
import { AuthUserService } from './AuthUserService';

export class AuthUserController {
  constructor(private authUserService: AuthUserService) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      await this.authUserService.execute(email, password);
    } catch (err) {
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
