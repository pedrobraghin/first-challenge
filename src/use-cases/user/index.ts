import { CreateUserController } from './CreateUser/CreateUserController';
import { CreateUserService } from './CreateUser/CreateUserService';
import { InMemoryUsersRepository } from '../../repositories/implementations/InMemoryUsersRepository';

import { AuthUserController } from './AuthUser/AuthUserController';
import { AuthUserService } from './AuthUser/AuthUserService';

const usersRepository = new InMemoryUsersRepository();

const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

const authUserService = new AuthUserService(usersRepository);
const authUserController = new AuthUserController(authUserService);

export { createUserController, authUserController };
