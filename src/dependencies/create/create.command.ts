import { graphdb } from "./../../core/data";

const command = `
  MATCH
    (user:User)-[:HAS]->(project:Project)
  WHERE
    user.name = {user} AND project.name = {project}
  MERGE (dependency:Dependency {
    name: {name},
    description: {description},
    version: {latestVersion},
    license: {latestLicense},
    date: {latestDate}
  })
  CREATE UNIQUE
    (project)-[:HAS {
      version: {version},
      date: {date},
      license: {license}
    }]->(dependency)`;

export async function createDependency(model, pkg) {
  const latestVersion = pkg["dist-tags"].latest;

  const params = {
    user: model.user,
    project: model.project,
    name: model.dependency.name,
    version: model.dependency.version,
    date: pkg.time[model.dependency.version],
    license: pkg.versions[model.dependency.version].license,
    description: pkg.description,
    latestVersion: latestVersion,
    latestDate: pkg.time[latestVersion],
    latestLicense: pkg.license,
  };

  await graphdb(async session => await session.run(command, params));
}
