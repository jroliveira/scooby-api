import neo4j from "neo4j-driver";

const username: string = process.env.NEO4J_USER;
const password: string = process.env.NEO4J_PASSWORD;
const authBasic: any = neo4j.auth.basic(username, password);

const host: string = process.env.NEO4J_ENDPOINT;

const config: any = {
  trust: "TRUST_ALL_CERTIFICATES",
  encrypted: "ENCRYPTION_NON_LOCAL",
};

export async function graphdb(command: (session: any) => any): Promise<any> {
  const driver: any = neo4j.driver(host, authBasic, config);
  const session: any = driver.session();

  const data: any = await command(session);

  session.close();
  driver.close();

  return data;
}
