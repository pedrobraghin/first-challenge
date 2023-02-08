import { Router } from 'express';
import { createUserController, authUserController } from '../modules/user';

const router = Router();

router.post('/sigin', createUserController.handle);
router.post('/signup', authUserController.handle);

export { router };
