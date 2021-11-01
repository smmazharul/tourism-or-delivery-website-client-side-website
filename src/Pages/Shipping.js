import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../css/AddService.css';
import UseAuth from '../Hooks/UseAuth';
import Congratulation from './Congratulation';


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {AllContexts, selectedService}= UseAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL,}=user;
    const onSubmit = data => {
        
    };
    return (
        <div className="add-seervice">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <Link to="/congratulation">
                <input style={{width:"100px"}} type="submit" value='Comfrom' />
                </Link>
            </form>
        </div>
    );
};

export default Shipping;
