import { Paged } from "./../../core";
import { User } from "./../";
import { getUser, schema } from "./";

export function get() {
  return async function route(ctx) {
    const model: any = {
      name: ctx.params.user,
    };

    schema.validate(model, error => {
      if (error) {
        ctx.throw(error.details.map(item => item.message).join(","), 400);
      }
    });

    const user: User = await getUser(model.name);
    if (!user) {
      ctx.throw("user not found", 404);
    }

    ctx.body = user;
  };
}
