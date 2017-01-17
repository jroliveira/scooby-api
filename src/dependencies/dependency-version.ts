export class Version {
  readonly version: string;
  readonly date: Date;
  readonly license: string;

  constructor(version: string, date: Date, license: string) {
    this.version = version;
    this.date = date;
    this.license = license;
  }
}
