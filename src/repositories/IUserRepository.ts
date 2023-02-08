import { User } from './../entities/User';

export interface IUserRepository {
  createUser(user: User): void;
  findByEmail(email: string): User | null;
}
