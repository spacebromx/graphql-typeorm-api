import {createConnection} from "typeorm"
import path from "path"

export async function connect() {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "graphql_typeorm",
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],
    synchronize: true
  })
  console.log("database connectd")
}