import React from "react";
import placeholder from '../assets/Images/placeholder.jpg';
import { Container } from 'react-bootstrap';


function Homepage () {
    return(
        <Container className="text-center mt-5" fluid>
            <h1>Rocks and Ropes</h1>
            <img src={placeholder} style={{width: '50%'}} alt='Main gym'/>
            <p className="text-justify mt-5">
            Welcome to Rocks and Ropes, a climbing and fitness facility. If you’re familiar with climbing, go ahead and peruse the website for information about training, or even better, signup to be able to create your own personalized weekly workout with the equipment we have available.  The QR codes around the gym will link you to descriptions of exercises and equipment. 
            If you’re new to climbing, this facility may seem a bit overwhelming at first, but don’t worry, the QR codes throughout the gym will guide you through the gym and hopefully explain what is going on here! 
            Rocks and Ropes is Tucson’s oldest climbing facility and was established in 1970. Climbing is a very physical and mental sport. It is a great way to get fit, meet new people and explore new and exciting places. Gyms were originally built to facilitate training for climbers so they could be stronger when climbing outdoors, where climbing first began. However, over the years indoor climbing has taken a life of its own and many people enjoy solely climbing indoors. It has also found its way to the Olympics. Enjoy you’re time here and we hope to see you again!
            </p>
        </Container>
    )
}

export default Homepage;
