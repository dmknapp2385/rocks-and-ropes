import React, { useEffect, useState } from "react";
import Day from "../Day";
import { Container, Col } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_ALL_ACTIVITIES } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Button, } from 'react-bootstrap';

const Week = (props) => {
    if (!Auth.loggedIn()) {
        //redirect to the home page if not logged in
        window.location.assign('/');
    }
    const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];
    const { activities, setActivities, detailModalProps } = props;
    const userProfile = Auth.getProfile();
    const [removeAllActivities, { error }] = useMutation(REMOVE_ALL_ACTIVITIES);
    const { data, loading } = useQuery(QUERY_ME);
    let savedActivities = [];
    
    

    useEffect(() => {
        if(data){
            savedActivities = data.me.savedActivities;
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
            <Col className="w-100 justify-content-center ">
                {days.map((day, i) => {
                    const temp = activities.filter(activity => activity.day === days[i]);
                    return <Day day={day} days={days} activities={temp ? temp : []} allActivities={activities} setActivities={setActivities} detailModalProps={detailModalProps} key={day} />
                })}
            </Col>
            <Button className = "mt-3 mb-3" variant="secondary" onClick={handleClearClick}>Clear Calendar</Button>
        </Container>
    );
}

export default Week;