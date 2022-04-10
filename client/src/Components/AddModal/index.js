import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container, Row, Col, Modal, Form, Button, Dropdown } from 'react-bootstrap';
import { ADD_ACTIVITY } from '../../utils/mutations';


function AddModal(props) {
  const {showModal, setShowModal, activity, link} = props
  const [formData, setFormData] = useState({day:'', length:'', reps:0, sets:0, note:''})
  const [addActivity] = useMutation(ADD_ACTIVITY);

  //form event handlers
  const handleClose = () => setShowModal(false);
  const handleClick= (name, value) => {setFormData({...formData, [name]:value})};
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async() => {
    const input = {...formData, name:`${activity}`, link:`${link}`};
    try {
      const { data } = await addActivity({
        variables: { input: input}
      });
      setFormData({day:'', length:'', reps:0, sets:0, note:''});
      setShowModal(false);
    } catch (e) {
      console.error(e);
    }
  }
  
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
                      {formData.day === '' ? 'Day': `${formData.day}`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item onClick={()=> handleClick('day', 'Monday')}>Monday</Dropdown.Item>
                      <Dropdown.Item onClick={()=> handleClick('day', 'Tuesday')} >Tuesday</Dropdown.Item>
                      <Dropdown.Item onClick={()=> handleClick('day', 'Wednesday')} >Wednesday</Dropdown.Item>
                      <Dropdown.Item onClick={()=> handleClick('day', 'Thursday')} >Thursday</Dropdown.Item>
                      <Dropdown.Item onClick={()=> handleClick('day', 'Friday')} >Friday</Dropdown.Item>
                      <Dropdown.Item onClick={()=> handleClick('day', 'Saturday')} >Saturday</Dropdown.Item>
                      <Dropdown.Item onClick={()=> handleClick('day', 'Sunday')} >Sunday</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Row>
              <Row>
              <Col>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      {formData.length === '' ? 'Length':`${formData.length}`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item onClick={() => handleClick ('length', '30Mins')}>30Mins</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('length', '60Mins')} >60Mins</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('length', '90Mins')}>90Mins</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('length', '120Mins')}>120Mins</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      {formData.sets === 0 ? 'Sets': `${formData.sets}`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item onClick={() => handleClick ('sets', 1)}>1</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('sets', 2)}>2</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('sets', 3)}>3</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('sets', 4)}>4</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      {formData.reps === 0 ? 'Reps': `${formData.reps}`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item onClick={() => handleClick ('reps', 5)}>5</Dropdown.Item>                      
                      <Dropdown.Item onClick={() => handleClick ('reps', 10)}>10</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('reps', 12)}>12</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleClick ('reps', 15)}>15</Dropdown.Item>
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
              <Form.Control name='note' value={formData.note} onChange={handleChange} as="textarea" rows={3} />
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
