import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

require('dotenv').config()

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});
