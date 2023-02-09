import { UserDTO } from './../use-cases/user/DTO/UserDTO';
import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/userSchema';

export async function userSchemaValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user: UserDTO = { ...req.body };

  try {
    await userSchema.validateAsync(user);
    const passwordMatch = user.password.match(user.confirmPassword);

    if (!passwordMatch) {
      return res.status(400).json({
        status: 'fail',
        messgae: "'Password' and 'confirmPassword' not matches",
      });
    }

    return next();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  }
  next();
}
