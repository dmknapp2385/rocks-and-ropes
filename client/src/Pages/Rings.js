import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../assets/Images/placeholder.jpg';
import auth from '../utils/auth';

function Rings(props) {
    const {setShowModal, setActivity, setlink} = props;

    function handleButtonClick(activity, link) {
        setShowModal(true);
        setActivity(activity);
        setlink(`/weights/rings#${link}`)
    }
    return(
        <Container>
             <Row id='pushups' className="mt-5">
                <Col className="text-center" sm={4}>
                <img src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Push Ups
                    </h3>
                    <p>
                    Adjust the ring height to your preferred level of difficulty, the closer to the ground the rings are the harder the exercise will be. Get in plank position and lower your chest to the bottom of the rings, keeping your shoulders stable and elbows in, close to your body.  This workout will really challenge shoulder stability and strength, more so than your average push up.                    </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Push Ups', 'pushups')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='ringflys' className="mt-5 mx-5">
                <Col sm={{span: 4, order: 'last'}}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Ring Flys
                    </h3>
                    <p>
                    Adjust the ring height to your preferred level of difficulty, the closer to the ground the rings are the harder the exercise will be. Get in plank position and slowly, with control lower your body by opening your arms out to the side into a T position. Reverse the motion by squeezing your arms together and repeat.                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Ring Flys', 'ringflys')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='invertrow' className="mt-5 mx-5">
                <Col sm={4}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Inverted Ring Row
                    </h3>
                    <p>
                    Adjust the ring height to your preferred level of difficulty, the closer to the ground the rings are the harder the exercise will be. Get under the rings and lift your butt off the ground, getting into a reverse plank position with the rings positioned right above your shoulders. Pull yourself up towards the rings and lower.                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Inverted Ring Row', 'invertrow')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='skincat' className="mt-5 mx-5">
                <Col sm={{span: 4, order: 'last'}}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Skin the Cat
                    </h3>
                    <p>
                    Adjust the rings so they are a few inches above your head. Grab the rings with arms straight overhead and hang. For an easier variation keep knees bent. Straighten legs for more advanced exercise. Tuck your pelvis up, curling up while rotating up and over, through the rings, ending with your face facing forward and your arms behind your back holding the rings. Reverse the motion. This exercise is advanced even with the easier variation, but will strengthen small rotator cuff muscles. 
                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Skin the Cat', 'skincat')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            
        </Container>
    )
}

export default Rings;
