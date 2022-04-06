import React, { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button, Dropdown } from 'react-bootstrap';


function AddModal(props) {
  const {showModal, setShowModal, activity, link} = props

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Track A Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>{activity}</Form.Label>
            {/* use this once we get full calendar up and running */}
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
            </Form.Group> */}

            {/* conditionally render this when called from the calendar page directly so custom workouts can be inputed */}
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Workout name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group> */}

            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Length</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group> */}
            <Container className="mb-3">
              <Row className='mb-3 text-center'>
                {/* conditionally render this when opened from the add to calendar button from pages */}
              <Dropdown style={{width:'150px'}}>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      Day
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>Monday</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Thursday</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Friday</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Saturday</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Sunday</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Row>
              <Row>
              <Col>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      Length
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>30Mins</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">60Mins</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">90Mins</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">120Mins</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      Sets
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      Reps
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>5
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">10</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">12</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">15</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>


            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
