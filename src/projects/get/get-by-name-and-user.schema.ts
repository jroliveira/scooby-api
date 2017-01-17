import * as Joi from "joi";

export const schema: any = Joi.object({
  user: Joi.string().required(),
  project: Joi.string().required(),
});
