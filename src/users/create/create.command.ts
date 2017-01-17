import { graphdb } from "./../../core/data";

const command = `
  MERGE (:User {
    name: {name}
  })`;

export async function createUser(model: any): Promise<void> {
  const params: any = {
    name: model.name,
  };

  await graphdb(async session => await session.run(command, params));
}
