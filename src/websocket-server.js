"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const schema_1 = require("@graphql-tools/schema");
const ws_1 = require("graphql-ws/lib/use/ws");
const apollo_server_1 = require("apollo-server");
const ws_2 = require("ws");
const typeDefs = (0, apollo_server_1.gql) `{
    type Query {
    
    }
}`;
const resolvers = {};
const server = (0, http_1.createServer)();
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers });
const wsServer = new ws_2.WebSocketServer({ server });
(0, ws_1.useServer)({ schema }, wsServer);
server.listen(4000, () => console.log(`Server running on ws:localhost:4000`));
