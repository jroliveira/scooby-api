import { excludeUser, schema } from "./";

export function exclude() {
  return async function route(ctx) {
    const model: any = {
      name: ctx.params.user,
    };

    schema.validate(model, error => {
      if (error) {
        ctx.throw(error.details.map(item => item.message).join(","), 400);
      }
    });

    await excludeUser(model.name);

    ctx.response.status = 204;
  };
}
