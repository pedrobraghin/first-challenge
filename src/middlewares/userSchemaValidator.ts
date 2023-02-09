import { User } from './../entities/User';
import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/userSchema';

export async function userSchemaValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
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

  try {
    const passwordMatch = password.match(confirmPassword);
    await userSchema.validateAsync({
      firstName,
      lastName,
      birthDate,
      email,
      city,
      country,
      password,
      confirmPassword,
    });

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
