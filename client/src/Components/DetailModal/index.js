import React, { useState } from 'react';
import { Container, Col, Modal, Button, } from 'react-bootstrap';

function DetailModal(props) {
    const { showDetailModal, setShowDetailModal, activity, detailModalProps } = props
    const [setShowModal, setIsEdit, setFormData, setActivity, setlink, setUpdateId] = detailModalProps;
    const handleClose = () => setShowDetailModal(false);
    const handleEdit=()=> {
        setIsEdit(true);
        setActivity(activity.name)
        setlink(activity.link)
        setFormData({day:activity.day, length: activity.length, reps:activity.reps, sets:activity.sets, note:activity.note});
        setUpdateId(activity._id)
        setShowModal(true);
        setShowDetailModal(false);
    }

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
                <Button variant="secondary" onClick={handleEdit}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailModal;
