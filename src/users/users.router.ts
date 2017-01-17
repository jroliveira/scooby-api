import * as Router from "koa-router";
import app from "./../app.webapi";
import { create } from "./create";
import { exclude } from "./exclude";
import { getAll } from "./get-all";
import { get } from "./get";

const router: Router = new Router();

router.get("/users", getAll());
router.get("/users/:user", get());
router.post("/users", create());
router.delete("/users/:user", exclude());

app
  .use(router.routes())
  .use(router.allowedMethods());
