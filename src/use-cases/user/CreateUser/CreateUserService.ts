import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/IUserRepository';
import bcrypt from 'bcrypt';

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User) {
    const userAlreadyExists = this.userRepository.findByEmail(user.email);

    if (userAlreadyExists) {
      throw new Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.confirmPassword = user.password;

    this.userRepository.createUser(user);
  }
}
