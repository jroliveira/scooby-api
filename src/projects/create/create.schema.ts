import * as Joi from "joi";

export const schema: any = Joi.object({
  user: Joi.string().required(),
  project: Joi.object({
    name: Joi.string().required(),
  }),
});
