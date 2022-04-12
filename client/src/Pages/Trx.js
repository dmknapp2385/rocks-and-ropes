import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../assets/Images/placeholder.jpg';
import auth from '../utils/auth';

function Trx(props) {
    const {setShowModal, setActivity, setlink} = props;

    function handleButtonClick(activity, link) {
        setShowModal(true);
        setActivity(activity);
        setlink(`/weights/trx#${link}`)
    }
    return(
        <Container className="mx-5" fluid>
             <Row id='kneetuck' className="mt-5 mx-5">
                <Col sm={4}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Knee Tuck
                    </h3>
                    <p>
                    Lower the bands to a foot off the ground. Place your feet in the trx foot loops (the unpadded loops) and get into plank position with your feet positioned directly below the bands. Squeeze your abdominal muscles in while you tuck your knees to your chest.                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Knee Tuck', 'kneetuck')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='singlerow' className="mt-5 mx-5">
                <Col sm={{span: 4, order: 'last'}}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Single Arm Row
                    </h3>
                    <p>
                    Position the TRX handles a couple feet off the ground. Grab one handle and lean back with your arm extended in front of you. To make this exercise easier, walk your feet back to get in a more vertical position with your body, completely parallel to the ground is the most advanced. Pull your body toward the TRX band while simultaneously rotating and reaching your opposite, free hand up toward the top of the TRX band.                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Single Arm Row', 'singlerow')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='yfly' className="mt-5 mx-5">
                <Col sm={4}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Y-Fly
                    </h3>
                    <p>
                    Position TRX handles at chest level. Hold handles straight out in front with arms extended, lean back (the more parallel your body to the ground, the harder the exercise will be). In one motion, pull your body up by lifting your arms above your head at a 45 degree angle ending with them extended overhead in a y position. Reverse and repeat.                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Y-Fly', 'yfly')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='reversefly' className="mt-5 mx-5">
                <Col sm={{span: 4, order: 'last'}}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Reverse Fly
                    </h3>
                    <p>
                    Position TRX handles at chest level. Hold handles straight out in front with arms extended, lean back (the more parallel your body to the ground, the harder the exercise will be). In one motion, pull your body toward the bands by opening your arms out straight to the side, ending in a T position. Reverse and repeat                    </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Reverse Fly', 'reversefly')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            
        </Container>
    )
}

export default Trx;
