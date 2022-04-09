import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../assets/Images/placeholder.jpg';
import { useQuery } from '@apollo/client';
import { QUERY_FREEWEIGHTS } from '../utils/queries';


function FreeWeights({setShowModal}) {
    const {loading, data} = useQuery(QUERY_FREEWEIGHTS);
    const freeWeightData = data?.freeWeights || {};


    if (loading) {
        return(
            <div>

            </div>
        )
    }

    return(
        <Container className="mx-5" fluid>
            {freeWeightData.map(weight=> (
                <Row className="mt-5 mx-5">
                  <Col sm={4}>
                  {/* <img className="justify-content-center" src={require(`${weight.image}`)} style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/> */}
                  </Col>
                  <Col sm={8}>
                      <h3>
                       {weight.name}
                      </h3>
                      <p>
                          {weight.description}
                      </p>
                      <Button variant="outline-secondary" onClick={()=> setShowModal(true)}>Add to Calendar</Button>{' '}
                  </Col>
              </Row>
            ))}
            
              
            
        </Container>
    )
}

export default FreeWeights;
