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

    //delete order
    const handleDelete=(id)=>{
        console.log(id);
        fetch(`https://ghostly-cheateau-43841.herokuapp.com/deleteProduct/${id}`,{
            method:"DELETE",
        })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }
    return (
        <div >
            <h2> Orders count {orders?.length}</h2>
                
                    <div className="">
                    <Link to='/shipping'>
                        <button className="p-3 bg-info text-white bold">Confrom your order</button>
                    </Link>
                    </div>
              <div>
              {orders?.map((dr,index)=>(
               
               <div key={dr._id}>
                   
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
          
                
              
            
        </div>
    );
};

export default MyOder;