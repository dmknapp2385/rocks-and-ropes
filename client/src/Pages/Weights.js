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
                        <h3>Free Weights</h3>
                        <img src={placeholder} style={{borderRadius:'5px', width: '20rem', }} alt='placeholder'/>
                    </Link>
                </Col>
                <Col>
                    <Link to='/weights/rings'>
                        <h3>Rings</h3>
                        <img src={placeholder} style={{borderRadius:'5px', width: '20rem'}} alt='placeholder'/>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Link to='/weights/trx'>
                    <h3>TRX Bands</h3>
                    <img src={placeholder}  style={{borderRadius:'5px', height: '300px', width: '20rem'}} alt='placeholder'/>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Weights;
