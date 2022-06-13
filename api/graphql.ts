import { ApolloServer } from "apollo-server-micro"
import { ApolloGateway } from "@apollo/gateway"
import { send } from "micro"
import Cors from "micro-cors"

require('dotenv').config()

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors();

const gateway = new ApolloGateway()

const server = new ApolloServer({
  gateway,
})

export default server.start().then(() => {
  const handler = server.createHandler({ path: "/api/graphql" })

  return cors((req, res) => {
    return req.method === "OPTIONS" ? send(res, 200, "ok") : handler(req, res)
  })
})
