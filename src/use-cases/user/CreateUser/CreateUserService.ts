import { User } from '../../../entities/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import bcrypt from 'bcrypt';

export class CreateUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(user: User) {
    const userAlreadyExists = this.userRepository.findByEmail(user.email);

    if (userAlreadyExists) {
      throw new Error('Email already exists');
    }
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    this.userRepository.createUser(user);
  }
}
