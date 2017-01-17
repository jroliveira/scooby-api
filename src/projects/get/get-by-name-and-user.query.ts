import { graphdb } from "./../../core/data";
import { Project } from "./../";

const command = `
  MATCH
    (user:User)-[:HAS]->(project:Project)-[has:HAS]->(dependency:Dependency)
  WHERE
    user.name = {user} AND project.name = {project}
  RETURN
    project.name AS name,
    count(dependency) AS dependencies`;

export async function getProject(model: any): Promise<Project> {
  const params: any = {
    user: model.user,
    project: model.project,
  };

  const data: any = await graphdb(async session => await session.run(command, params));

  if (!data.records.length) {
    return undefined;
  }

  const item: any = data.records[0];

  return new Project(item.get("name"), item.get("dependencies").low);
}
