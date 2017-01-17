import { createUser, schema } from "./";

export function create() {
  return async function route(ctx) {
    const model: any = ctx.request.body;

    schema.validate(model, error => {
      if (error) {
        ctx.throw(error.details.map(item => item.message).join(","), 400);
      }
    });

    await createUser(model);

    ctx.response.status = 201;
  };
}
