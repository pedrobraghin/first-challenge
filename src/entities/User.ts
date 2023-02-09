import { v4 as uuidv4 } from 'uuid';

export class User {
  public _id: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public birthDate: string,
    public email: string,
    public city: string,
    public country: string,
    public password: string,
    public confirmPassword: string
  ) {
    this._id = uuidv4();
  }
}
