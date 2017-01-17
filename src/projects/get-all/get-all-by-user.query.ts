import { graphdb } from "./../../core/data";
import { Project } from "./../";

const command = `
  MATCH
    (user:User)-[:HAS]->(project:Project)-[has:HAS]->(dependency:Dependency)
  WHERE
    user.name = {user}
  RETURN
    project.name AS name,
    count(dependency) AS dependencies
  ORDER BY project.name SKIP {skip} LIMIT {limit}`;

export async function getProjects(model: any): Promise<Array<Project>> {
  const params: any = {
    user: model.user,
    skip: model.skip,
    limit: model.limit,
  };

  const data: any = await graphdb(async session => await session.run(command, params));

  return data
    .records
    .map(item => new Project(item.get("name"), 1));
}
