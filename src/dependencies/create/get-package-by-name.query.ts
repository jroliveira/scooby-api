import * as request from "request-promise";

export async function getPackage(name): Promise<any> {
  const options = {
    uri: `http://registry.npmjs.org/${name}`,
    json: true,
  };

  return await request(options);
}
