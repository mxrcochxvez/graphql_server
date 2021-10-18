import { ApolloServer } from 'apollo-server';
import DB from './settings.js';
import mongoose from 'mongoose';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(async ({ url }) => {
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("DB hooked up"));
    console.log(`🚀  Server ready at ${url}`);
});
