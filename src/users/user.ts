export class User {
  readonly name: string;
  readonly projects: number;

  constructor(name: string, projects: number) {
    this.name = name;
    this.projects = projects;
  }
}
