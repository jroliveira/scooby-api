import * as bodyParser from "koa-bodyparser";
import * as compress from "koa-compress";
import * as cors from "kcors";
import * as json from "koa-json";
import * as logger from "koa-logger";
import * as Koa from "koa";

const app: Koa = new Koa();
app
  .use(bodyParser())
  .use(cors())
  .use(compress())
  .use(json())
  .use(logger())
  .use(async (ctx, next) => {
    try {
      await next();

      if (ctx.status === 404) {
        ctx.throw("resource not found", 404);
      }
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;

      ctx.body = {
        message: err.message,
      };
    }
  });

export default app;
