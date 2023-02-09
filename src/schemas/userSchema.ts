import Joi from 'joi';
import JoiDateFactory from '@joi/date';

const joiExtended = Joi.extend(JoiDateFactory);

const userSchema = joiExtended.object({
  firstName: joiExtended.string().min(3).required(),

  lastName: joiExtended.string().min(3).required(),

  birthDate: joiExtended.date().format('YYYY-MM-DD').utc().required(),

  email: joiExtended.string().email().required(),

  city: joiExtended.string().required(),

  country: joiExtended.string().required(),

  password: joiExtended.string().min(8).required(),

  confirmPassword: joiExtended.string().min(8).required(),
});

export { userSchema };
