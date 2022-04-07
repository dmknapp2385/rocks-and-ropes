import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me{
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
{
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
    }
}`

export const QUERY_ACTIVITY_BY_DAY = gql`
{
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
      }
}`

