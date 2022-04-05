import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import placeholder from '../assets/Images/placeholder.jpg';

function Weights () {
    return(
        <Container fluid className="mx-auto text-center mt-5">
            <h1 className="mx-auto" style={{ width: '600px'}}>Free Weights</h1>

            <Row className="mt-5"> 
                <Col>
                    <Link to='/weights/free'>
                        <img src={placeholder} style={{borderRadius:'5px', width: '20rem', }} alt='placeholder'/>
                    </Link>
                </Col>
                <Col>
                    <Link to='/weights/rings'>
                    <img src={placeholder} style={{borderRadius:'5px', width: '20rem'}} alt='placeholder'/>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Link to='/weights/trx'>
                    <img src={placeholder}  style={{borderRadius:'5px', height: '300px', width: '20rem'}} alt='placeholder'/>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Weights;
