import { IUsersRepository } from '../../../repositories/IUsersRepository';
import bcrypt from 'bcrypt';

export class AuthUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(email: string, password: string) {
    const user = this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const authorized = await bcrypt.compare(password, user.password);

    if (!authorized) {
      throw new Error('Invalid email or password');
    }
  }
}
