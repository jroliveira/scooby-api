import * as Router from "koa-router";
import app from "./../app.webapi";
import { create } from "./create";
import { getAll } from "./get-all";

const router: Router = new Router();

router.get("/users/:user/projects/:project/dependencies", getAll());
router.post("/users/:user/projects/:project/dependencies", create());

app
  .use(router.routes())
  .use(router.allowedMethods());
