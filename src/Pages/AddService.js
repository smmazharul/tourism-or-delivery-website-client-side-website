import React from 'react';
import { useForm } from "react-hook-form";
import '../css/AddService.css';
import axios from 'axios'
const AddService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://ghostly-cheateau-43841.herokuapp.com/services',data)
        .then(res=>{
            console.log(res)
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();

            }
        })
    };
    return (
        <div className="add-seervice">
            <h2>Please add a Service </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("titile", )}  placeholder='Titile'/>
                <textarea {...register("description",  )} placeholder='description' />
                <input {...register("type", )}  placeholder='type'/>
                <input {...register("img", )}  placeholder='img url'/>
                <input {...register("time", )}  placeholder='delivery time'/>
                <input {...register("cost", )}  placeholder='delivery cost'/>
                <input type="number" {...register("price", )}  placeholder='price'/>
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;
