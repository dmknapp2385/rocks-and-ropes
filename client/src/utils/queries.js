import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
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
            userId
        }
    }
}`

export const QUERY_ACTIVITIES = gql`
{
    activities {
        _id
        day
        length
        name
        note
        sets
        reps
        link
        userId {
            _id
        }
    }
}`

export const QUERY_ACTIVITY = gql`
    query activity($id: ID!) {
        activity(id: $id) {
            _id
            day
            length
            name
            note
            sets
            reps
            link
            userId {
              _id
            } 
        }
<<<<<<< HEAD
    }
`
=======
    }`
>>>>>>> 473542baca3f5c54dad61bc555c71ec3040cf4c7

export const QUERY_ACTIVITY_BY_DAY = gql`
    query ActivitiesByDay($userId: String, $day: String) {
        activitiesByDay(userId: $userId, day: $day) {
          _id
          day
          length
          name
          note
          sets
          reps
          link
          userId {
            username
          }
        }
<<<<<<< HEAD
      }
`
=======
      }`

export const QUERY_FREEWEIGHTS = gql`
    query FreeWeights {
        freeWeights {
          _id
          name
          description
          image
        }
    }`
>>>>>>> 473542baca3f5c54dad61bc555c71ec3040cf4c7

export const QUERY_FREEWEIGHT = gql`
    query FreeWeight($id: ID!) {
        freeWeight(_id: $id) {
          _id
          name
          description
          image
        }
    }`