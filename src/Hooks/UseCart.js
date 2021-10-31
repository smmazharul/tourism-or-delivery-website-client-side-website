import { useState } from "react";

const UseCart = () => {
    const [selectedService, setSelectedService]=useState([]);

    const addToCart=(service)=>{
       
            const newSelection=[...selectedService,service ];
            setSelectedService(newSelection);


    }
    return{addToCart,selectedService};
};

export default UseCart;