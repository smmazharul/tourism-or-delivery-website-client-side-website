import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseAuth from '../Hooks/UseAuth';
import Banner from './Banner';
import Homes from './Homes';


const Home = () => {
    const{useApi}=UseAuth();
    return (
        <div >
            
            <Banner></Banner>
            <h2 style={{ color:'orange'}}>We are Offering <br /> Our Menu</h2>

            <Container className="mt-5 mb-3">
           
                <Row xs={1} md={3} className="g-4 ">

                            {
                                    useApi.slice(0,6).map(user=> <Homes user={user} key={user._id}></Homes> )
                            }

                </Row>
            </Container>
        </div>
    );
};

export default Home;