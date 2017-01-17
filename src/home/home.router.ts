import * as Router from "koa-router";
import app from "./../app.webapi";
import { get } from "./get.route";

const router: Router = new Router();

router.get("/", get);

app
  .use(router.routes())
  .use(router.allowedMethods());
