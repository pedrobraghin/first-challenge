import { CreateUserController } from './CreateUser/CreateUserController';
import { CreateUserService } from './CreateUser/CreateUserService';
import { InMemoryUsersRepository } from '../../repositories/implementations/InMemoryUsersRepository';

import { AuthUserController } from './AuthUser/AuthUserController';
import { AuthUserService } from './AuthUser/AuthUserService';

const inMemoryUsersRepository = new InMemoryUsersRepository();

const createUserService = new CreateUserService(inMemoryUsersRepository);
const createUserController = new CreateUserController(createUserService);

const authUserService = new AuthUserService(inMemoryUsersRepository);
const authUserController = new AuthUserController(authUserService);

export { createUserController, authUserController };
