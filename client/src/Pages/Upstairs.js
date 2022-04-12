import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import tension from '../assets/Images/tension-board.jpg';
import spray from '../assets/Images/spray-wall.jpg'
import placeholder from '../assets/Images/placeholder.jpg';
import hangboard from '../assets/Images/hangboard.jpg';
import campus from '../assets/Images/campus-board.jpg';
import auth from '../utils/auth';




function Upstairs (props) {
    const {setShowModal, setActivity, setlink} = props;

    function handleButtonClick(activity, link) {
        setShowModal(true);
        setActivity(activity);
        setlink(`/upstairs#${link}`)
    }

    return(
        <Container>
            <Row id='tension' className="mt-5">
                <Col className="text-center" sm={4}>
                <img src={tension} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='tension board'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Tension Board
                    </h3>
                    <p>
                    The tension board is a training board designed to train power and body tension. To operate the board, download the tension app from your phone’s app store. When connecting your app, this board is 12X8 with full set of holds and LED lights.  Name your board whatever you’d like. Make sure your Bluetooth is on and connect. Once connected you can choose from hundreds of tension board bolder problems graded on a <a href="https://en.wikipedia.org/wiki/Grade_(bouldering)">V Scale</a>. When you cast the boulder problem, LED lights show the hands and feet. Green=starting hands, purple=foot hold only, red=ending hold.  The tension board is also symmetrical to allow for balanced strengthening. 
                    </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick('Tension Board', 'tension')}>Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='spray' className="mt-5">
                <Col className="text-center" sm={{span: 4, order: 'last'}}>
                <img  src={spray} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='spray wall'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Spray Wall
                    </h3>
                    <p>
                    The spray wall, also known as a circuit board, is here to help train endurance, particularly power endurance. The wall contains an assortment of holds of various types. Feel free to choose your own path, or circuit, with the holds, or follow the numbered tags on the hold. Each colored number sequence corresponds to a different grade starting at 5.10 to 5.13 on the <a href="https://en.wikipedia.org/wiki/Yosemite_Decimal_System">Yosemite Decimal System</a>. The numbered holds are hand holds and feet are whatever hold works for you. 
                    </p>
                    {(auth.loggedIn() && <Button onClick={()=> handleButtonClick('Spray Wall', 'spray')} variant="secondary">Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='hangboards' className="mt-5">
                <Col className='text-center' sm={4}>
                <img src={hangboard} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='hangboard'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Hangboards
                    </h3>
                    <p>
                    These devices are for finger training and strengthening. As their name implies, you simply hang on these boards with anything from both hands to mere fingertips of two fingers. The smaller the hold or the more the weight, the more advanced the exercise.  Depending on the exercise, you can target tendon or ligament (finger pulley) strength.  More reps (seconds hanging) with less rest time will train ligaments, and long hangs on smaller holds or with more weight added to your body with more rest , will train tendons. Here are some typical hangboard workouts. Repeaters: 7sec hang, 3 sec rest, ten times. Max hangs: 10 sec hang (usually trying to add weight or decrease hold size) with two to three minute rest between. Try for three sets of three different hold types(crimps, slopers, pinches, open hand)
                    </p>
                    {(auth.loggedIn() && <Button onClick={()=> handleButtonClick('Hangboards', 'hangboards')} variant="secondary">Add to Calendar</Button>)}
                </Col>
            </Row>
            <Row id='campus' className="mt-5">
                <Col className="text-center" sm={{span: 4, order: 'last'}}>
                <img src={campus} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='campus board'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Campus Board
                    </h3>
                    <p>
                    The campus board is a very advanced training exercise that would not typically be recommended for new climbers as it can lead to injury. Campusing is the act of moving from one hold to another without any feet on the wall. However, this board can be used to progress to this and develop the pure strength and power required to do so. 
                    </p>
                    {(auth.loggedIn() && <Button onClick={()=> handleButtonClick('Campus Board', 'campus')} variant="secondary">Add to Calendar</Button>)}
                </Col>
            </Row>
        </Container>
    )
}

export default Upstairs;
