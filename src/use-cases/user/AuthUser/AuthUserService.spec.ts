import { User } from '../../../entities/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';
import { CreateUserService } from '../CreateUser/CreateUserService';
import { AuthUserService } from './AuthUserService';

describe('Authenticate user', () => {
  let usersRepository: IUsersRepository;
  let authUserService: AuthUserService;
  let createUserService: CreateUserService;
  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository();
    authUserService = new AuthUserService(usersRepository);
    createUserService = new CreateUserService(usersRepository);
  });

  it('Should authenticate the user', async () => {
    const user = new User(
      'John',
      'Doe',
      '1962-12-02',
      'email@email.com',
      'London',
      'England',
      '12345678'
    );

    await createUserService.execute(user);

    expect(authUserService.execute(user.email, user.password)).resolves;
  });

  it('Should not authenticate user if email not exists', async () => {
    await expect(
      authUserService.execute('email@email.com', '129ej192ne')
    ).rejects.toEqual(new Error('Invalid email or password'));
  });

  it('Should not authenticate user with invalid password', async () => {
    const user = new User(
      'John',
      'Doe',
      '1962-12-02',
      'email2@email.com',
      'London',
      'England',
      '129ej192ne123l12d'
    );

    await createUserService.execute(user);

    await expect(
      authUserService.execute(user.email, '12345678')
    ).rejects.toEqual(new Error('Invalid email or password'));

    await expect(authUserService.execute(user.email, '')).rejects.toEqual(
      new Error('Invalid email or password')
    );
  });
});
