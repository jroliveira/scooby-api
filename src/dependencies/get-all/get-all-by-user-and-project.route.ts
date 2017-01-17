import { Paged } from "./../../core";
import { getUser } from "./../../users/get";
import { getProject } from "./../../projects/get";
import { User } from "./../../users";
import { Dependency } from "./../";
import { getDependencies, schema } from "./";

export function getAll() {
  return async function route(ctx) {
    const model: any = {
      user: ctx.params.user,
      project: ctx.params.project,
      skip: Number(ctx.query.skip || 0),
      limit: Number(ctx.query.limit || 1),
    };

    schema.validate(model, error => {
      if (error) {
        ctx.throw(error.details.map(item => item.message).join(","), 400);
      }
    });

    const existsUser: User = await getUser(model.user);
    if (!existsUser) {
      ctx.throw("user not found", 404);
    }

    const existsProject = await getProject(model);
    if (!existsProject) {
      ctx.throw("project not found", 404);
    }

    const dependencies: Array<Dependency> = await getDependencies(model);

    ctx.body = new Paged(dependencies, model.skip, model.limit);
  };
}
