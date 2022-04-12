import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../assets/Images/placeholder.jpg';
import pushup from '../assets/Images/push-up.jpg';
import invertedrow from '../assets/Images/inverted-row.jpg';
import frontlever from '../assets/Images/front-lever.jpg';
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
                <img src={pushup} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='push ups'/>
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
            <Row id='ringflys' className="mt-5">
                <Col className="text-center" sm={{span: 4, order: 'last'}}>
                {/* <img  src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/> */}
                <iframe src="https://giphy.com/embed/h4Hyl1LPC9g2RfzdN9" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/h4Hyl1LPC9g2RfzdN9">via GIPHY</a></p>
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
            <Row id='invertrow' className="mt-5">
                <Col className="text-center" sm={4}>
                <img src={invertedrow} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='inverted row'/>
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
            <Row id='frontlever' className="mt-5">
                <Col className="text-center" sm={{span: 4, order: 'last'}}>
                <img src={frontlever} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='front lever'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Front Lever
                    </h3>
                    <p>
                    Adjust the rings so they are a few inches above your head. Grab the rings with arms straight overhead and hang. For an easier variation keep knees bent. Straighten legs for more advanced exercise. Bring your shoulder blades down your back and with a straight back lift your entire body, hinging at your shoulders until your are holding the rings abover you with your back parallel to the ground. This exercise is very advanced and works the rotator cuff muscles. 
                     </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Front Lever', 'frontlever')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            
        </Container>
    )
}

export default Rings;
