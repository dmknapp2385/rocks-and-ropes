import React, {useEffect, useState} from "react";
import Day from "../Day";
import { Container, Row } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ACTIVITY_BY_DAY } from '../../utils/queries';
import { REMOVE_ALL_ACTIVITIES } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Week = () => {
    if(!Auth.loggedIn()){
        //redirect to the home page if not logged in
        window.location.assign('/');
    }
    const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];
    const [activities, setActivities] = useState([]);
    const userProfile = Auth.getProfile();
    const [removeAllActivities, {error}] = useMutation(REMOVE_ALL_ACTIVITIES);
    const useQueryMultiple = () => {
        const res1 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[0]}});
        const res2 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[1]}});
        const res3 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[2]}});
        const res4 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[3]}});
        const res5 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[4]}});
        const res6 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[5]}});
        const res7 = useQuery(QUERY_ACTIVITY_BY_DAY, {variables: {userId: userProfile.data._id, day: days[6]}});
        return [res1.data, res2.data, res3.data, res4.data, res5.data, res6.data, res7.data];
      }

      const dataArr = useQueryMultiple();
      console.log(dataArr);
    useEffect(() => {
        setActivities(dataArr);
    },[]);

    const handleClearClick = async(event) => {
        //clear all activities here!
        try{
            const { data } = await removeAllActivities({variables: {userId: userProfile.data._id} });

            if (error) {
              throw new Error('something went wrong!');
            }
        }
        catch(e){
            console.log(e);
        }
        //set activities state
        setActivities([]);
    };
    return (

        <Container className="text-center mt-5" fluid>
            <h2>Weekly Calendar</h2>
            <Row className="w-100 justify-content-center">
                {days.map((day, i) => {
                    return <Day day={day} days = {days} activities={activities[i]} allActivities = {activities} setActivities = {setActivities} key = {day}/>
                })}
            </Row>
            <button className = "m-2 rounded border border-dark" onClick={handleClearClick}>Clear Calendar</button>
        </Container>
    );
}

export default Week;