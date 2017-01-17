export class Paged {
  readonly data: Array<any>;
  readonly skip: number;
  readonly limit: number;
  readonly pages: number;

  constructor(data: Array<any>, skip: number, limit: number) {
    this.data = data || [];
    this.skip = skip || 0;
    this.limit = limit || 10;
    this.pages = Math.ceil(this.data.length / this.limit);
  }
}
