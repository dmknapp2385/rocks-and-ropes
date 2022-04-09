import React, { useState } from 'react';
import { Container, Col, Modal, Button, } from 'react-bootstrap';

function DetailModal(props) {
    const { showDetailModal, setShowDetailModal, activity } = props

    const handleClose = () => setShowDetailModal(false);

    return (
        <Modal show={showDetailModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Activity Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <Container className='mt-3'>
                    <Col >
                        <h4>{activity.name}</h4>
                        <div className="p-2">
                            <p>Day: {activity.day}</p>
                            <p>Duration: {`${activity.length}`}</p>
                        </div>
                        <div className = "p-2">
                            <p>Sets: {activity.sets}</p>
                            <p>Reps: {activity.reps}</p>
                        </div>
                        <div className="p-2">
                            <p>Note: {activity.note}</p>
                            <Button variant="secondary" href={activity.link}>More information</Button>
                        </div>
                    </Col>     
                </Container>   
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailModal;
