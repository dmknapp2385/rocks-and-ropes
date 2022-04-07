import { gql } from '@apollo/client';

export const ADD_USER = gql`
{
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
          token
            user {
            _id
            username
            email
          }
        }
    }
}`

export const LOGIN_USER = gql`
{
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
}`

export const ADD_ACTIVITY = gql`
{
    mutation AddActivity($input: ActivityInput) {
        addActivity(input: $input) {
          username
          email
          savedActivities {
            _id
            day
            name
            note
            length
            link
            sets
            reps
          }
        }
      }
}`

export const REMOVE_ACTIVITY = gql`
{
    mutation RemoveActivity($activityId: ID!) {
        removeActivity(activityId: $activityId) {
          _id
          username
          email
          savedActivities {
            _id
            day
            length
            name
            note
            sets
            reps
            link
          }
        }
    }
}`

export const REMOVE_ALL_ACTIVITIES = gql`
{
    mutation RemoveAllActivities($userId: ID!) {
        removeAllActivities(userId: $userId) {
          _id
          username
          email
          savedActivities {
            _id
            day
            name
            length
            note
            sets
            reps
            link
            userId {
              _id
            }
          }
        }
      }
}`


