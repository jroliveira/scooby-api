import { graphdb } from "./../../core/data";
import { User } from "./../";

const command = `
  MATCH
    (user:User)-[:HAS]->(project:Project)
  RETURN
    user.name AS name,
    count(project) AS projects
  ORDER BY user.name SKIP {skip} LIMIT {limit}`;

export async function getUsers(model: any): Promise<Array<User>> {
  const params: any = {
    skip: model.skip,
    limit: model.limit,
  };

  const data: any = await graphdb(async session => await session.run(command, params));

  return data
    .records
    .map(item => new User(item.get("name"), item.get("projects").low));
}
