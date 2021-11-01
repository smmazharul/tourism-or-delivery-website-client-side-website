import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';


const Services = (props) => {
    const {titile,description,time,img,type,cost,price,_id}=props.user;
    const service=props.user;
    const {AllContexts, selectedService}= UseAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL}=user;
const {addToCart}=UseAuth();
const handleAddToCart=()=>{
    const data=service;
    data.email=`${email}`
    delete service._id;
    
    fetch('https://ghostly-cheateau-43841.herokuapp.com/addOrder',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data),
    })
    console.log(data);
}
    return (
        <div>
             <Container className="service">
                    <Card className='service-card'>
                        <Row>
                            <Col >
                                     <Card.Img variant="top" src={img}/>
                                    <Card.Body>
                                    <Card.Title> {titile}</Card.Title>

                                            <div className='service-cart-content'>
                                                <h5>{type}</h5>
                                                <p>{description}</p>
                                            </div>
                                            <div className='time-visit'>
                                                <h4>Time: {time} mim</h4>
                                                <h4>Delivery cost: {cost} BDT</h4>
                                            </div>


                                    </Card.Body>
                                    <Card.Footer>
                                    <div className='service-btn'>
                                    {/* <button onClick={()=>addToCart(service)} className='button1'>Booking Now</button> */}
                                    
                                    <Link to={`/myOrder/${_id}`}>
                                     {/* <button className='button2'>See Details</button> */}
                                     <button onClick={()=>handleAddToCart(service)} className='button1'>Purchage Now</button>
                                    </Link>
                                    </div>
                                    </Card.Footer>
                            </Col>

                        </Row>
                    </Card>
             </Container>
        </div>
    );
};

export default Services;