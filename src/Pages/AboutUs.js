import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from'../Img/Banner/banner.png'
const AboutUs = () => {
  
    return (
        <div style={{marginBottom:'20%'}}>
            <h2> about us </h2>
            
            <Container className="">
            <Row xs={1} md={2} >
                <Col className="my-auto about-content" >
                
                <h2 >Our Charmin</h2>
                    <p>With a hope to accelerate the establishment of digital Bangladesh, Pathao provides an app based solution through ride sharing, food delivery and e-commerce logistics services.
                    With a hope to accelerate the establishment of digital Bangladesh, Pathao provides an app based solution through ride sharing, food delivery and e-commerce logistics services.
                    </p>
               


               </Col>
                
                <Col><img className='img-fluid' width='500px' height='500px' src={banner} alt="" /></Col>
                
            </Row>
            </Container>
           
        </div>
    );
};

export default AboutUs;