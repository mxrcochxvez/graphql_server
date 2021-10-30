import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
    createdAt: String!
  }

  type Query {
    users: [User]
    authenticateUser(
      username: String!, 
      password: String!
    ): User
  }

  type Mutation {
    createUser(
      username: String!
      password: String!
      email: String!
      firstName: String!
      lastName: String!
    ): User
  }
`;

export default typeDefs;