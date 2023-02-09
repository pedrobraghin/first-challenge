import { User } from '../entities/User';

export interface IUsersRepository {
  createUser(user: User): void;
  findByEmail(email: string): User | null;
}
