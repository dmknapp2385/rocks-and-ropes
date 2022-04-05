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
  calendar: [Calendar]
}

type Calendar {
  _id: ID
  day: String
  activity: [Activity]
}

type Activity {
  _id: ID
  day: String
  name: String
  note: String
  sets: Int
  reps: Int
  time: String
  link: String
}

type FreeWeight {
  _id: ID
  name: String
  description: String
  image: String
}

input ActivityInput {
  day: String
  name: String
  note: String
  sets: Int
  reps: Int
  time: String
  link: String
}

  type Query {
    me: User
    freeWeights: [FreeWeight]
    freeWeight(_id: ID!): FreeWeight
    activities: [Activity]
    activity(_id:ID!): Activity
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addActivity(calendarId: ID!, input: ActivityInput): Calendar
    removeActivity(calendarId:ID!, activityId: ID!): Calendar
  }
`;

// export the typeDefs
module.exports = typeDefs;