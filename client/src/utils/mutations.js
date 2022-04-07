import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          _id
          email
          username
          savedActivities {
            _id
          }
        }
      }
    }
`

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!, $username: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}`

export const ADD_ACTIVITY = gql`
mutation addActivity ($input: ActivityInput){
  addActivity(input: $input) {
    username
    email
    savedActivities {
      _id
    }
  }
}`
