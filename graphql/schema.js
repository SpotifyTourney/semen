const { gql } = require('apollo-server');

const typeDefs = gql`
    type Album {
        name: String!,
        artist: String!,
        year: String!
    }
    type User {
        id: ID!,
        accessToken: String!,
        refreshToken: String!,
        albums: [Album]
    }
    type Query {
        getUsers: [User]
    }
    type Mutation {
        createUser(code: String!): Boolean
    }
`;

module.exports = typeDefs;
