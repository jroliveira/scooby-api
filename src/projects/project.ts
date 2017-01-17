export class Project {
  readonly name: string;
  readonly dependencies: number;

  constructor(name: string, dependencies: number) {
    this.name = name;
    this.dependencies = dependencies;
  }
}
