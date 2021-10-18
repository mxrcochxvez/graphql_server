import UserResolver from './UserResolver.js';

const resolvers = {
    Query: {
        ...UserResolver.Query
    },
    Mutation: {
        ...UserResolver.Mutation
    }
}

export default resolvers;