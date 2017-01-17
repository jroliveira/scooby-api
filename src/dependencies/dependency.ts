import { Version } from "./";

export class Dependency {
  readonly name: string;
  readonly description: string;
  readonly version: Version;
  readonly latest: Version;

  constructor(name: string, description: string, version: Version, latest: Version) {
    this.name = name;
    this.description = description,
    this.version = version;
    this.latest = latest;
  }
}
