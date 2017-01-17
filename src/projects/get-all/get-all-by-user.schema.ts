import * as Joi from "joi";

export const schema: any = Joi.object({
  user: Joi.string().required(),
  skip: Joi.number().integer().min(0).max(100),
  limit: Joi.number().integer().min(1).max(100),
});
