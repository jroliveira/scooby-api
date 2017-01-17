import { Paged } from "./../../core";
import { getUser } from "./../../users/get";
import { User } from "./../../users";
import { Project } from "./../";
import { getProject, schema } from "./";

export function get() {
  return async function route(ctx) {
    const model: any = {
      user: ctx.params.user,
      project: ctx.params.project,
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

    const project: Project = await getProject(model);
    if (!project) {
      ctx.throw("project not found", 404);
    }

    ctx.body = project;
  };
}
