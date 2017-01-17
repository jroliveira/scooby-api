import { graphdb } from "./../../core/data";

const command = `
  MATCH
    (user:User)
  WHERE
    user.name = {name}
  DETACH DELETE user`;

export async function excludeUser(user: string): Promise<void> {
  const params: any = {
    name: user,
  };

  await graphdb(async session => await session.run(command, params));
}
