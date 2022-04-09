import React, { useEffect, useState } from "react";
import Day from "../Day";
import { Container, Row } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_ALL_ACTIVITIES } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Week = (props) => {
    if (!Auth.loggedIn()) {
        //redirect to the home page if not logged in
        window.location.assign('/');
    }
    const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];
    const { activities, setActivities } = props;
    const userProfile = Auth.getProfile();
    const [removeAllActivities, { error }] = useMutation(REMOVE_ALL_ACTIVITIES);
    const { data, loading } = useQuery(QUERY_ME);
    let savedActivities = [];
    
    

    useEffect(() => {
        if(data){
            savedActivities = data.me.savedActivities;
            console.log(savedActivities);
            setActivities(savedActivities);
        }
    }, [data]);

    const handleClearClick = async (event) => {
        //clear all activities here!
        try {
            const { data } = await removeAllActivities({ variables: { userId: userProfile.data._id } });

            if (error) {
                throw new Error('something went wrong!');
            }
        }
        catch (e) {
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
                    const temp = activities.filter(activity => activity.day === days[i]);
                    return <Day day={day} days={days} activities={temp ? temp : []} allActivities={activities} setActivities={setActivities} key={day} />
                })}
            </Row>
            <button className="m-2 rounded border border-dark" onClick={handleClearClick}>Clear Calendar</button>
        </Container>
    );
}

export default Week;