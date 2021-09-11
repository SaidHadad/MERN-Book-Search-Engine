const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    helloWorld: () => {
      return 'Hello World!';
    }
  }
};

module.exports = resolvers;