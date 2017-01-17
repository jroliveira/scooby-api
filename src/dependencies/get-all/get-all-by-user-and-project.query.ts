import { graphdb } from "./../../core/data";
import { Dependency, Version } from "./../";

const command = `
  MATCH
    (user:User)-[:HAS]->(project:Project)-[has:HAS]->(dependency:Dependency)
  WHERE
    user.name = {user} AND project.name = {project}
  RETURN
    dependency.name AS name,
    has.version AS version,
    has.date AS date,
    has.license AS license,
    dependency.description AS description,
    dependency.version AS latestVersion,
    dependency.license AS latestLicense,
    dependency.date AS latestDate
  ORDER BY dependency.name SKIP {skip} LIMIT {limit}`;

export async function getDependencies(model: any) {
  const params = {
    user: model.user,
    project: model.project,
    skip: model.skip,
    limit: model.limit,
  };

  const data = await graphdb(async session => await session.run(command, params));

  return data
    .records
    .map(item => new Dependency(
      item.get("name"),
      item.get("description"),
      new Version(
        item.get("version"),
        item.get("date"),
        item.get("license")),
      new Version(
        item.get("latestVersion"),
        item.get("latestDate"),
        item.get("latestLicense"))
    ));
}
