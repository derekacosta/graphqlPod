require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import { Prisma, forwardTo } from "prisma-binding";
import resolvers from "./resolvers";
import path from "path";

let typeDefs = path.join(__dirname, "schema.graphql");
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/service/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
      // endpoint: "http://prisma:4466", // the endpoint of the Prisma API
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml`
    })
  })
});

server.start(() =>
  console.log(`Prisma-starter running => http://localhost:4000`)
);
