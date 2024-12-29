import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { useServer } from 'graphql-ws/lib/use/ws';
import { gql } from 'apollo-server'

import { WebSocketServer } from 'ws';

const typeDefs = gql `
    type Query {
        message: String
    }
`;

const resolvers = {
    Query: {
        message: () => "test message"
    }
}

const server = createServer();
const schema = makeExecutableSchema({ typeDefs, resolvers });
const wsServer = new WebSocketServer({ server });
useServer({schema}, wsServer);

server.listen(4000, ()=> console.log(`Server running on ws:localhost:4000`))

