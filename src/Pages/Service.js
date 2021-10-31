import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Services from './Services';

const Service = () => {
    const{useApi}=UseAuth();
    
    return (
        <div className='service-container'>

            <Container className="mt-5 mb-3 ">
            
                <div><h2 className="text-center mb-4 mt-5">Our Service</h2></div>
            
                <Row xs={1} md={3} className="g-4 ">

                            { useApi.map((user,index)=> <Services user={user} key={user._id}></Services>)}
                           
                            
                </Row>
            </Container>
        </div>
    );
};

export default Service;
 // (
                                // <Container className="service">
                               
                        //         <Card className='service-card'>
                        //             <Row>
                        //                 <Col >
                        //                          <Card.Img variant="top" src={user.img}/>
                        //                         <Card.Body>
                        //                         <Card.Title> {user.titile}</Card.Title>
            
                        //                                 <div className='service-cart-content'>
                        //                                     <h5>{user.type}</h5>
                        //                                     <p>{user.description}</p>
                        //                                 </div>
                        //                                 <div className='time-visit'>
                        //                                     <h4>Time: {user.time} mim</h4>
                        //                                     <h4>Delivery cost: {user.cost} BDT</h4>
                        //                                 </div>
            
            
                        //                         </Card.Body>
                        //                         <Card.Footer>
                        //                         <div className='service-btn'>
                        //                         {/* <button onClick={()=>addToCart(service)} className='button1'>Booking Now</button> */}
                        //                         <button onClick={()=>handleAddToCart(index)} className='button1'>Purchage Now</button>
                        //                         <Link to={`/service`}>
                        //                          <button className='button2'>See Details</button>
                        //                         </Link>
                        //                         </div>
                        //                         </Card.Footer>
                        //                 </Col>
            
                        //             </Row>
                        //         </Card>
                        // //  </Container>
                        //      ))}