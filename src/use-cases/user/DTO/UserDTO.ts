import { User } from './../../../entities/User';

export interface UserDTO extends User {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
}
