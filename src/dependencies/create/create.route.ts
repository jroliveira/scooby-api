import { getUser } from "./../../users/get";
import { getProject } from "./../../projects/get";
import { createDependency , getPackage, schema } from "./";

export function create() {
  return async function route(ctx) {
    const model = {
      user: ctx.params.user,
      project: ctx.params.project,
      dependency: ctx.request.body,
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

    const existsProject = await getProject(model);
    if (!existsProject) {
      ctx.throw("project not found", 404);
    }

    const pkg = await getPackage(model.dependency.name);

    await createDependency(model, pkg);

    ctx.response.status = 201;
  };
}
