import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../assets/Images/placeholder.jpg';
import { useQuery } from '@apollo/client';
import { QUERY_FREEWEIGHTS } from '../utils/queries';
import auth from '../utils/auth';


function FreeWeights(props) {
    const {loading, data} = useQuery(QUERY_FREEWEIGHTS);
    const freeWeightData = data?.freeWeights || {};

    const {setShowModal, setActivity, setlink} = props;

    function handleButtonClick(activity, link) {
        setShowModal(true);
        setActivity(activity);
        setlink(`/weights/free#${link}`)
        
    }


    if (loading) {
        return(
            <div>

            </div>
        )
    }

    return(
        <Container className="mx-5" fluid>
            {freeWeightData.map((weight, index)=> (
                <Row key={weight.link} className="mt-5 mx-5">
                  <Col sm={4}>
                  <img src={require(`../assets/Images/${weight.image}.jpg`)} className="justify-content-center" style={{borderRadius:'5px', height: '200px', width: '200px'}} alt='placeholder'/>
                  </Col>
                  <Col sm={{span: 8, order: `${index % 2 === 0? 'last': 'first'}`}}>
                    <h3>
                    {weight.name}
                    </h3>
                    <p>
                        {weight.description}
                    </p>
                    {(auth.loggedIn() && <Button variant="secondary" onClick={()=> handleButtonClick(`${weight.name}`, `${weight.link}`)}>Add to Calendar</Button>)}
                  </Col>
              </Row>
            ))}
            
              
                
        </Container>
    )
}

export default FreeWeights;
