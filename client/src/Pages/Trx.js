import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../assets/Images/placeholder.jpg';

function Trx(props) {
    const {setShowModal, setActivity, setlink} = props;

    function handleButtonClick(activity, link) {
        setShowModal(true);
        setActivity(activity);
        setlink(`/weights/trx#${link}`)
    }
    return(
        <Container className="mx-5" fluid>
             <Row id='exercise1' className="mt-5 mx-5">
                <Col sm={4}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Exercise 1
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button onClick={()=> handleButtonClick('', '')} variant="outline-secondary">Add to Calendar</Button>{' '}
                </Col>
            </Row>
            <Row id='exercise2' className="mt-5 mx-5">
                <Col sm={{span: 4, order: 'last'}}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Exercise 2
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button onClick={()=> handleButtonClick('', '')} variant="outline-secondary">Add to Calendar</Button>{' '}
                </Col>
            </Row>
            <Row id='exercise3' className="mt-5 mx-5">
                <Col sm={4}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Exericise 3
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button onClick={()=> handleButtonClick('', '')} variant="outline-secondary">Add to Calendar</Button>{' '}
                </Col>
            </Row>
            <Row id='exercise4' className="mt-5 mx-5">
                <Col sm={{span: 4, order: 'last'}}>
                <img className="justify-content-center" src={placeholder} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <h3>
                        Exericise 4
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button onClick={()=> handleButtonClick('', '')} variant="outline-secondary">Add to Calendar</Button>{' '}
                </Col>
            </Row>
            
        </Container>
    )
}

export default Trx;
