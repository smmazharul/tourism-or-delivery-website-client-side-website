import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import UseAuth from '../Hooks/UseAuth';
const Cart = () => {
    const {selectedService}=UseAuth()
    return (
        <div className='cart'>
                    <Container className="mt-5">
                        {selectedService.map(({titile,description,time,img,type,cost,price})=>(


            <Row className='my-3'  xs={1} md={2} >
                <Col className="my-auto about-content" >
                
                <h2 >{titile}</h2>
                <h3>{type}</h3>
                
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <button style={{background:'orange'}}>Booking Now</button>
                </div>
               </Col>
                
                <Col><img className='img-fluid' width='250px' height='250px' src={img} alt="" /></Col>
                
            </Row>)
              )}
            </Container>
        </div>
    );
};

export default Cart;