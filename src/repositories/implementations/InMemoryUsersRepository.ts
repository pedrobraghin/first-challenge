import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class InMemoryUsersRepository implements IUserRepository {
  private users: User[] = [];

  createUser(user: User): void {
    this.users.push(user);
  }

  findByEmail(email: string): User | null {
    return this.users.find((u) => u.email === email) ?? null;
  }
}
