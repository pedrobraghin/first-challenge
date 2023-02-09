import Joi from 'joi';

const eventSchema = Joi.object({
  description: Joi.string().required(),

  createdAt: Joi.date().iso().required(),

  dateTime: Joi.date().iso().required(),
});

export { eventSchema };
