

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';
import UseAuth from '../Hooks/UseAuth';
import { Card,Button, Container, Table,} from 'react-bootstrap';

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

    const handleDelete=id=>{
        console.log(id);
        fetch(`https://ghostly-cheateau-43841.herokuapp.com/deleteProduct/${id}`,{
            method:"DELETE",
        })
       .then(res=>res.json())
       .then(data=>console.log(data))
       const remaining= orders.filter(order=>order._id !==id)
       setOrders(remaining)
    }
    return (
        <div className="py-5" style={{marginBottom:'24%'}}>
            <h2>Manage order</h2>
            {orders?.map((dr,index)=>  ( 
                
                    
                
                    <Container key={dr._id} >

                            <Table responsive bordered hover responsive="sm" responsive="md" responsive="xl">
                            <thead>
                                <tr>
                                
                                
                                    <th >Pruduct</th>
                                    <th >Name</th>
                                    <th >Email</th>
                                    <th >Prduct ID</th>
                                    <th >USD</th>
                                    
                                
                                </tr>
                            </thead>
                            <tbody sm={2}>
                                <tr>
                                
                                
                                    <td ><img src={dr.img} alt="" /></td>
                                    <td >{user.displayName}</td>
                                    <td >{user.email}</td>
                                    <td >{dr._id}</td>
                                    <td >{dr.price} $</td>
                                    <td><button onClick={()=>handleDelete(dr._id)}>Cancel</button> </td>
                                    <td ><button>Confrom</button></td>
                                
                                </tr>
                                
                                
                            </tbody>
                            </Table>


                     </Container>
                     
             ))}
            
        </div>
    );
};

export default ManageOrder;