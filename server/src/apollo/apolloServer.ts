import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application } from "express";
import { startStandaloneServer } from "@apollo/server/standalone";

import { userResolvers } from "../graphql/resolvers/user.resolvers";
import { userTypeDefs } from "../graphql/typeDefs/user.typeDefs";
import { ApolloServer } from "@apollo/server";

interface CustomJwtPayload {
  _id: string;
}
interface MyContext {
  token?: String;
}

export async function startApolloServer(app: Application) {
  const typeDefs = [userTypeDefs];
  const resolvers = [userResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer<MyContext>({
    schema,
  });

  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port: 4000 },
    context: async ({ req, res }) => ({ token: req.headers.token, res }),
  });
  console.log(`🚀 Server ready at: ${url}`);
}
