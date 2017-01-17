import * as Joi from "joi";

export const schema = Joi.object({
  user: Joi.string().required(),
  project: Joi.string().required(),
  dependency: Joi.object({
    name: Joi.string().required(),
    version: Joi.string().required(),
  }),
});
