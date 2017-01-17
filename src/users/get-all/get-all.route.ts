import { Paged } from "./../../core";
import { User } from "./../";
import { getUsers, schema } from "./";

export function getAll() {
  return async function route(ctx) {
    const model: any = {
      skip: Number(ctx.query.skip || 0),
      limit: Number(ctx.query.limit || 1),
    };

    schema.validate(model, error => {
      if (error) {
        ctx.throw(error.details.map(item => item.message).join(","), 400);
      }
    });

    const users: Array<User> = await getUsers(model);

    ctx.body = new Paged(users, model.skip, model.limit);
  };
}
