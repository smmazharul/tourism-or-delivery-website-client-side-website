import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';
import UseAuth from '../Hooks/UseAuth';
import { Card,Button,Container  } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../css/AddService.css';
import axios from 'axios';

const MyOder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:"DELETE",
        })
       .then(res=>res.json())
       .then(data=>console.log(data))
       const remaining= orders.filter(order=>order._id !==id)
       setOrders(remaining)
    }

    const onSubmit = data => {
        data.order=orders
        fetch('http://localhost:5000/confrom',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.insertedId){
                alert('Order process Successfully')
                
                reset()
            }
        })
    };

    return (
        <div >
            <h2> Orders count {orders?.length}</h2>
                    <div className="add-seervice">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />
                        
                        <input style={{width:"100px"}} type="submit"  />
                       
                        </form>
                 </div>
              <div className='d-flex'>
                  <div>
                  {orders?.map((dr,index)=>(
                    
                    <div key={dr._id}>
                        
                        <Container>
                        
                        
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dr.img} />
                        <Card.Body>
                            <Card.Title>{dr.titile}</Card.Title>
                            <h5>{dr.type}</h5>
                            <Card.Text>
                            {dr?.description}
                            </Card.Text>
                            <Card.Text className='d-flex justify-content-evenly'>
                            <span className='bg-info p-2 rounded'>{dr?.price} $</span> <span className='bg-info p-2 rounded'>{dr?.time} min</span>
                            </Card.Text>

                            <Button onClick={()=>handleDelete(dr._id)} variant="primary">Cancel</Button>
                        </Card.Body>
                        </Card>
                        </Container>
                        
                    </div>
                    
                    ))}
                  </div>

                   
                    
             </div>
          
                
              
            
        </div>
    );
};

export default MyOder;


