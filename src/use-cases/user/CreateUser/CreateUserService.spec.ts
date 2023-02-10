import { CreateUserService } from './CreateUserService';
import { InMemoryUsersRepository } from './../../../repositories/implementations/InMemoryUsersRepository';
import { User } from './../../../entities/User';

describe('Create user', () => {
  let userRepository: InMemoryUsersRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    userRepository = new InMemoryUsersRepository();
    createUserService = new CreateUserService(userRepository);
  });

  it('Should be able to create a new user', async () => {
    const userData: User = new User(
      'John',
      'Doe',
      '1962-12-02',
      'email@email.com',
      'London',
      'England',
      '12345678'
    );
    expect(async () => {
      await createUserService.execute(userData);
    }).not.toThrowError();
  });

  it('Should not be able to create user with already taken email', async () => {
    const user: User = new User(
      'John',
      'Doe',
      '1962-12-02',
      'email@email.com',
      'Londres',
      'ENG',
      '12345678'
    );

    await createUserService.execute(user);

    await expect(createUserService.execute(user)).rejects.toEqual(
      new Error('Email already exists')
    );
  });
});
