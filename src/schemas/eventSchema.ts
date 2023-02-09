import Joi from 'joi';

const eventSchema = Joi.object({
  description: Joi.string().required(),
  dateTime: Joi.date().iso().required(),
});

export { eventSchema };
