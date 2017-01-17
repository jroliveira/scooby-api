import { graphdb } from "./../../core/data";

const command = `
  MATCH
    (user:User)
  WHERE
    user.name = {user}
  MERGE (project:Project {
    name: {name}
  })
  CREATE UNIQUE
    (user)-[:HAS]->(project)`;

export async function createProject(model: any): Promise<void> {
  const params: any = {
    user: model.user,
    name: model.project.name,
  };

  await graphdb(async session => await session.run(command, params));
}
