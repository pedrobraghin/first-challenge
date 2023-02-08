import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';
import { InMemoryUsersRepository } from '../../../repositories/implementations/InMemoryUsersRepository';

const inMemoryUsersRepository = new InMemoryUsersRepository();
const createUserService = new CreateUserService(inMemoryUsersRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
