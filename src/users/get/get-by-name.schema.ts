import * as Joi from "joi";

export const schema: any = Joi.object({
  name: Joi.string().required(),
});
