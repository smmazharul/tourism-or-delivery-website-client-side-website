import React from 'react';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import UseAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const {AllContexts, selectedService}= UseAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL}=user;
    return (
        <div>
            <Navbar className='sticky="top" '  expand="lg">
            <Container>
                <Navbar.Brand to="/home" className="fw-bold  text-white">COMOTO <span style={{color:"#65E6FA"}}>Express Deliver</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <Nav.Link as={NavLink}  to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>

                    <Nav.Link as={NavLink} to="/service">Package</Nav.Link>
                    {/* <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link> */}
                    {/* <Nav.Link as={NavLink} to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> <Badge bg="info">{selectedService.length}</Badge></Nav.Link> */}

                    {!user.displayName ?(<>
                        
                    <Nav.Link as={NavLink} style={{fontWeight:'900'}} to="/login">Login/Sign Up</Nav.Link>



                    </>):(
                       <>
                       <Nav.Link as={NavLink} to="/manageOrder">Manage Order</Nav.Link>
                       <Nav.Link as={NavLink} to="/myOrder">My order</Nav.Link>
                       <Nav.Link as={NavLink} to="/newService">Add Service</Nav.Link>
                       <span className="user-name"><img src={photoURL}  alt="" /></span>
                       <button onClick={logOut} className="log-btn">Log Out</button></>
                    )}


                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;