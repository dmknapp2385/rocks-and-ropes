import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Weights () {
    return(
        <div>
            <h1>Free Weights</h1>
            <Container>
                <Row>
                    <Col md={{span:4}}>Image of Freeweights</Col>
                    <Col md={{span:4, offset:3}}>Image of Rings</Col>
                </Row>
                <Row>
                    <Col md={{span:4, offset:4}}>Image of TRX</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Weights;
