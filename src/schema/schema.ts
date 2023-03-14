import { gql } from "apollo-server";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

let schema;
const dirname = path.dirname(fileURLToPath(import.meta.url));
const schemaFile = path.join(dirname, "schema.graphql");

try {
  schema = await fs.readFile(schemaFile);
} catch (e: unknown) {
  console.log((e as Error).message);
}

const typeDefs = gql`
  ${schema}
`;

export default typeDefs;
