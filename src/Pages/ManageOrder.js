
import { Container, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';
import UseAuth from '../Hooks/UseAuth';
import { Card,Button,} from 'react-bootstrap';

const ManageOrder = () => {
    const {AllContexts, selectedService}= UseAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL,}=user;
   const [orders,setOrders]=useState([])
   const [isDeleted,setIsDeleted]=useState(null)
   console.log(orders);
    useEffect(()=>{
        fetch(`https://ghostly-cheateau-43841.herokuapp.com/myOders/${email}`)
        .then(res=>res.json())


        .then(data=>setOrders(data))
    },[])
    return (
        <div className="py-5">
            <h2>Manage order</h2>
            {orders?.map((dr,index)=>(
                    <Container>
                    <Table striped bordered hover responsive="sm" xs={12} md={8}>
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product ID</th>
                            <th>USD</th>
                            
                            </tr>
                        </thead>
                        <tbody responsive="sm">
                            <tr>
                            <td><img src={dr.img} alt="" /></td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>{dr._id}</td>
                            <td>{dr.price} $</td>
                            
                            <td> 
                                <button>Cancel</button>
                                <button>Comfrom</button>
                            
                             </td>

                            </tr>
                            
                        </tbody>
                     </Table>
                     </Container>
                     
             ))}
            
        </div>
    );
};

export default ManageOrder;