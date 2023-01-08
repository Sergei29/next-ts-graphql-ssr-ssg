import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { JsonDB, Config } from "node-json-db";

import { typeDefs, resolvers } from "@/graphql/server";
// import db from "@/db";
import { ServerContextType } from "@/types";

const server = new ApolloServer<ServerContextType>({
  resolvers,
  typeDefs,
  introspection: process.env.NODE_ENV !== "production",
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    req,
    res,
    db: new JsonDB(new Config("./db.json", true, true, "/")),
  }),
});
