// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Auth {
  token: ID!
  user: User
}

type User {
  _id: ID
  username: String
  email: String
  savedActivities: [Activity]
}

type Activity {
  _id: ID!
  day: String
  length: String
  name: String
  note: String
  sets: Int
  reps: Int
  link: String
  userId: User
}

type FreeWeight {
  _id: ID
  name: String
  description: String
  image: String
}

input ActivityInput {
  day: String
  length: String
  name: String
  note: String
  sets: Int
  reps: Int
  link: String
  userId: String
}

  type Query {
    me(day:String): User
    freeWeights: [FreeWeight]
    freeWeight(_id: ID!): FreeWeight
    activities: [Activity]
    activity(_id:ID!): Activity
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addActivity(input: ActivityInput): User
    removeActivity(_id: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;