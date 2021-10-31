import React from 'react';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const Homes = (props) => {
    const {titile,description,time,img,type,cost,price}=props.user;
    const service=props.user;
    const {addToCart}=UseAuth()

    return (
        <div>
            


             <div className="card mb-3 " style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid w-100 rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{titile}</h5>
        <h6 >Type: {type}</h6>
        <p className="card-text d-flex justify-content-evenly"><span>Deliver</span> <span>Time </span> </p>
        <p className="card-text d-flex justify-content-evenly"> <span>{cost}</span> <span>{time} mim</span> </p>
        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            <div className='d-flex justify-content-evenly'>
            <Link to="/service">
             <button  style={{background:'orange', color:'#fff', width:'100px'}} onClick={()=>addToCart(service)}>Purchase</button>
                                    
             </Link>
            <h5 style={{ color:'orange'}}>Price: {price} $</h5>
            </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Homes;