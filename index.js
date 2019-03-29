import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql'
})

server.start(() => console.log('sssssss'))