import { getUser } from "./../../users/get";
import { createProject, schema } from "./";

export function create() {
  return async function route(ctx) {
    const model: any = {
      user: ctx.params.user,
      project: ctx.request.body,
    };

    schema.validate(model, error => {
      if (error) {
        ctx.throw(error.details.map(item => item.message).join(","), 400);
      }
    });

    const existsUser = await getUser(model.user);
    if (!existsUser) {
      ctx.throw("user not found", 404);
    }

    await createProject(model);

    ctx.response.status = 201;
  };
}
