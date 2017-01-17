import * as Router from "koa-router";
import app from "./../app.webapi";
import { getAll } from "./get-all";
import { get } from "./get";
import { create } from "./create";

const router: Router = new Router();

router.get("/users/:user/projects", getAll());
router.get("/users/:user/projects/:project", get());
router.post("/users/:user/projects", create());

app
  .use(router.routes())
  .use(router.allowedMethods());
