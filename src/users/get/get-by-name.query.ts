import { graphdb } from "./../../core/data";
import { User } from "./../";

const command = `
  MATCH
    (user:User)-[:HAS]->(project:Project)
  WHERE
    user.name = {user}
  RETURN
    user.name AS name,
    count(project) AS projects`;

export async function getUser(user: string): Promise<User> {
  const params: any = {
    user: user,
  };

  const data: any = await graphdb(async session => await session.run(command, params));

  if (!data.records.length) {
    return undefined;
  }

  const item: any = data.records[0];

  return new User(item.get("name"), item.get("projects").low);
}
