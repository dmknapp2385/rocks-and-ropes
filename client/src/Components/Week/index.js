import React from "react";
import Day from "../Day";
import { Container, Row } from 'react-bootstrap';

const Week = () => {
    const days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];

    //the following is mock data that i'm using to test. it will be removed later.

    // type Activity {
    //     _id: ID
    //     day: String
    //     length: String
    //     name: String
    //     note: String
    //     sets: Int
    //     reps: Int
    //     link: String
    //     userId: User
    //   }

    const data = [[{ _id: 1, day: 'Sunday', length: '30', name: "run", note: "fun", sets: 10, reps: 5, link: "link", userId: 1 },
    { _id: 2, day: 'Sunday', length: '45', name: 'bench press', note: 'wow!', sets: 7, reps: 8, link: 'link', userId: 1 }], [],
    [{ _id: 3, day: 'Tuesday', length: '60', name: "push-ups", note: "bleh", sets: 8, reps: 9, link: "link", userId: 1 }],
    [{ _id: 4, day: 'Wednesday', length: '30', name: "run", note: "fun", sets: 10, reps: 5, link: "link", userId: 1 },
    { _id: 5, day: 'Wednesday', length: '45', name: 'bench press', note: 'wow!', sets: 7, reps: 8, link: 'link', userId: 1 },
    { _id: 6, day: 'Wednesday', length: '60', name: 'curl', note: 'yay!', sets: 12, reps: 15, link: 'link', userId: 1 }], [],
    [{ _id: 7, day: 'Friday', length: '60', name: "push-ups", note: "bleh", sets: 8, reps: 9, link: "link", userId: 1 }], []];


    //end testing code
    {/*<div className="d-flex flex-column pt-5 align-items-center">*/ }
    //className="d-flex flex-xs-column flex-lg-row w-100 justify-content-center"
    return (

        <Container className="text-center mt-5" fluid>
            <h2>Weekly Calendar</h2>
            <Row className="w-100 justify-content-center">
                {days.map((day, i) => {
                    return <Day day={day} activities={data[i]} key={`${day}`} />
                })}
            </Row>
            <button className = "m-2 rounded border border-dark">Clear Calendar</button>
        </Container>
    );
}

export default Week;