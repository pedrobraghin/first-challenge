import { User } from './../../../entities/User';
import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  constructor(private userService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const user: User = req.body;

    await this.userService.execute(user);

    return res.status(201).send();
  }
}
