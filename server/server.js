const express = require('express');
const db = require('./config/connection');
const path = require('path');
const mongoose = require('mongoose');

//open source graphQL that helps manage data between the cloud and our UI
const { ApolloServer } = require('apollo-server-express');

//typeDefs: represents our server's graphSQL schema. resolvers: populates data for individual schema
const { typeDefs, resolvers } = require('./schemas');

//authentication
const { authMiddleware } = require('./utils/auth');

//instructs which port the server will listen on
const PORT = process.env.PORT || 3001;


//initializes express
const app = express();

//initializes ApolloServer instance
const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  context: authMiddleware
});

server.applyMiddleware({ app });

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

//static content generated from app in production environment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

