import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Weights () {

    return(
        <div>
            <h1>Free Weights</h1>
            <Container>
                <Row>
                    <Col md={{span:4}}>
                        <Link to='/weights/free'>Image of Freeweights</Link>
                    </Col>
                    <Col md={{span:4, offset:3}}>
                        <Link to='/weights/rings'>Image of Rings</Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:4, offset:4}}>
                        <Link to='/weights/trx'>Image of TRX</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Weights;
