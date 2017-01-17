import * as http from "http";
import webapi from "./app.webapi";

const server: any = http.createServer(webapi.callback());

setup();

async function setup(): Promise<void> {
  require("./home/home.module");
  require("./users/users.module");
  require("./projects/projects.module");
  require("./dependencies/dependencies.module");
}

const port: number = process.env.PORT;
server.listen(port, () => console.log(`Listening on port ${port}`));
