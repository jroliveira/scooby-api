const pkg: any = require("../../package.json");

export async function get(ctx) {
  ctx.body = {
    name: pkg.name,
    version: pkg.version,
    message: "I\"m working...",
  };
}
