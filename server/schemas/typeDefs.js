const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Artwork {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    artworks: [Artwork]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    userId: String
    email: String
    orders: [Order]
    role: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    artworks(category: ID, name: String): [Artwork]
    artwork(_id: ID!): Artwork
    user: User
    order(_id: ID!): Order
    checkout(artworks: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(artworks: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateArtwork(_id: ID!, quantity: Int!): Artwork
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
