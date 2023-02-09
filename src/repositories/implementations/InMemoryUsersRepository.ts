import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  createUser(user: User): void {
    this.users.push(user);
  }

  findByEmail(email: string): User | null {
    return this.users.find((u) => u.email === email) ?? null;
  }
}
