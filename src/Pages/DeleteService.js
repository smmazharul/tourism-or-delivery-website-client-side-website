import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const DeleteService = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://ghostly-cheateau-43841.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    const handleDelete=id=>{
        const url=`https://ghostly-cheateau-43841.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE',

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert("deleted")

                const remaining = services.filter(service=>service._id !==id);
            setServices(remaining)
            }
            
        })
    }
    return (
        <div>
            <h2>this is delete</h2>
            {
                services.map(service=> <Container key={service._id} >

                    <Table responsive bordered hover responsive="sm" responsive="md" responsive="xl">
                    <thead>
                        <tr>
                        
                        
                            <th >Pruduct</th>
                            <th >Name</th>
                            <th >Email</th>
                            <th >Prduct ID</th>
                          
                            
                        
                        </tr>
                    </thead>
                    <tbody sm={2}>
                        <tr>
                        
                        
                            <td ><img src={service.img} alt="" /></td>
                            
                            
                            <td >{service._id}</td>
                            <td >{service.price} $</td>
                            <td><button onClick={()=>handleDelete(service._id)}>Delete Service</button> </td>
                            
                        
                        </tr>
                        
                        
                    </tbody>
                    </Table>


             </Container> )
            }

        </div>
    );
};

export default DeleteService;