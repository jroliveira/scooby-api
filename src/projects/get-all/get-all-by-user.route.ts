import { Paged } from "./../../core";
import { getUser } from "./../../users/get";
import { User } from "./../../users";
import { Project } from "./../";
import { getProjects, schema } from "./";

export function getAll() {
  return async function route(ctx) {
    const model: any = {
      user: ctx.params.user,
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

    const projects: Array<Project> = await getProjects(model);

    ctx.body = new Paged(projects, model.skip, model.limit);
  };
}
