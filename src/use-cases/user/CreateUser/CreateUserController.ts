import { User } from './../../../entities/User';
import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const {
      firstName,
      lastName,
      birthDate,
      email,
      city,
      country,
      password,
      confirmPassword,
    }: User = req.body;

    const user = new User(
      firstName,
      lastName,
      birthDate,
      email,
      city,
      country,
      password,
      confirmPassword
    );

    try {
      await this.createUserService.execute(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          status: 'fail',
          message: err.message,
        });
      }
    }

    return res.status(201).send();
  }
}
