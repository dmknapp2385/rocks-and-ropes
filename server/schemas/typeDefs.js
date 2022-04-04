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
  bookCount: Int
  savedBooks: [Book]
  calendar: [Calendar]
}

type Calendar {
  calendarId: String
  day: String
  activity: [Activity]
}

type Activity {
  activityId: String
  name: String
  note: String
  sets: Int
  reps: Int
  time: String
  link: String
}

type FreeWeight {
  freeId: String
  name: String
  description: String
  image: String
}

input ActivityInput {
  name: String
  note: String
  sets: Int
  reps: Int
  time: String
  link: String
}

  type Query {
    me: User
    freeWeight: FreeWeight
    activity: Activity
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addActivity(input: ActivityInput): User
    removeActivity(activityId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;