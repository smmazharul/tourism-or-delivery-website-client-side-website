import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';
import UseAuth from '../Hooks/UseAuth';
import { Card,Button,Container  } from 'react-bootstrap';


const MyOder = () => {
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
    console.log(orders.length);

    const handleDelete=(id)=>{
        
        console.log(id);
        fetch(`https://ghostly-cheateau-43841.herokuapp.com/deleteProduct/${id}`,{
            method:'DELETE',
           
        })
        .then(res=>res.json)
        .then(data=>{
            if(data.deletedCount===1){
                const remainingOrder=orders.filter((order)=>order._id!==id);
                setOrders(remainingOrder);}
            else{
               alert('hfjdsfhhdfh')

            }
            
        })
    }
    return (
        <div>
            <h2>this is my orders {orders?.length}</h2>

              
            {orders?.map((dr,index)=>(
               
               <div>
                   <Container>
                  <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dr.img} />
                <Card.Body>
                    <Card.Title>{dr.titile}</Card.Title>
                    <h2>{email}</h2>
                    <Card.Text>
                    {dr?.description}
                    </Card.Text>
                    <Button onClick={()=>handleDelete(dr._id)} variant="primary">Cancel</Button>
                </Card.Body>
                </Card>
                </Container>
               </div>
                
            ))}
              
            
        </div>
    );
};

export default MyOder;